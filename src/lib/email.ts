import nodemailer from "nodemailer";

export interface FormSubmissionPayload {
  name: string;
  email: string;
  phone?: string;
  interest?: string;
  message?: string;
  consent: boolean;
  honeypot?: string;
  type: "contact" | "get-involved" | "partner";
}

// In-memory rate limiting map: ip -> timestamps[]
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitMap.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return false; // Rate limit exceeded
  }

  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return true;
}

// Basic input sanitizer to prevent XSS / injection in HTML emails
export function sanitizeInput(str?: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .trim();
}

export async function processSubmission(payload: FormSubmissionPayload) {
  // 1. Honeypot check: If the hidden honeypot field has a value, silently ignore (bot detected)
  if (payload.honeypot && payload.honeypot.trim().length > 0) {
    console.warn("[SPAM BLOCKED] Honeypot field was triggered.");
    return {
      success: true,
      message: "Thank you for reaching out. Your submission has been received.",
    };
  }

  // 2. Validate required fields
  const cleanName = sanitizeInput(payload.name);
  const cleanEmail = sanitizeInput(payload.email);
  const cleanPhone = sanitizeInput(payload.phone);
  const cleanInterest = sanitizeInput(payload.interest || "General Inquiry");
  const cleanMessage = sanitizeInput(payload.message);

  if (!cleanName || !cleanEmail) {
    throw new Error("Name and email are required fields.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cleanEmail)) {
    throw new Error("Please provide a valid email address.");
  }

  if (!payload.consent) {
    throw new Error("You must agree to the consent checkbox before submitting.");
  }

  const dateSubmitted = new Date().toLocaleString("en-CA", {
    timeZone: "America/Toronto",
    dateStyle: "full",
    timeStyle: "short",
  });

  const subjectType =
    payload.type === "get-involved"
      ? "Gordonridge Website — New Get Involved Submission"
      : payload.type === "partner"
      ? "Gordonridge Website — New Partner Inquiry Submission"
      : "Gordonridge Website — New Contact Submission";

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const recipientEmail =
    process.env.GORDONRIDGE_RECIPIENT_EMAIL || gmailUser || "info@gordonridge.ca";

  // HTML notification for organization staff
  const staffHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #0F243E; background-color: #FDFBF7; padding: 24px; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #E2E8F0; overflow: hidden; box-shadow: 0 4px 12px rgba(15, 36, 62, 0.05); }
          .header { background-color: #0F243E; color: #ffffff; padding: 24px; text-align: center; }
          .badge { display: inline-block; background-color: #1B7A3E; color: #ffffff; font-size: 11px; font-weight: bold; text-transform: uppercase; padding: 4px 12px; border-radius: 9999px; letter-spacing: 0.05em; }
          .content { padding: 32px 24px; }
          .field { margin-bottom: 18px; border-bottom: 1px solid #F1F5F9; padding-bottom: 12px; }
          .label { font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748B; letter-spacing: 0.05em; margin-bottom: 4px; }
          .value { font-size: 15px; font-weight: 600; color: #0F243E; }
          .message-box { background-color: #F0F7F2; border-left: 4px solid #1B7A3E; padding: 16px; border-radius: 8px; font-size: 14px; color: #1E293B; white-space: pre-wrap; margin-top: 8px; }
          .footer { background-color: #F8FAFC; padding: 16px 24px; text-align: center; font-size: 12px; color: #94A3B8; border-top: 1px solid #E2E8F0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <span class="badge">Community Desk Notification</span>
            <h2 style="margin: 12px 0 0 0; font-size: 20px; font-weight: 800; color: #ffffff;">${subjectType}</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Date Submitted</div>
              <div class="value">${dateSubmitted}</div>
            </div>
            <div class="field">
              <div class="label">Full Name</div>
              <div class="value">${cleanName}</div>
            </div>
            <div class="field">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${cleanEmail}" style="color: #1B7A3E; text-decoration: none;">${cleanEmail}</a></div>
            </div>
            ${
              cleanPhone
                ? `<div class="field">
                    <div class="label">Phone Number</div>
                    <div class="value"><a href="tel:${cleanPhone}" style="color: #0F243E; text-decoration: none;">${cleanPhone}</a></div>
                  </div>`
                : ""
            }
            <div class="field">
              <div class="label">Interest / Topic</div>
              <div class="value" style="color: #1B7A3E;">${cleanInterest}</div>
            </div>
            <div class="field" style="border-bottom: none;">
              <div class="label">Message / Details</div>
              <div class="message-box">${cleanMessage || "No additional message provided."}</div>
            </div>
          </div>
          <div class="footer">
            Gordonridge Community Development Initiative &bull; 20 Gordonridge Place Community Centre, Scarborough, ON
          </div>
        </div>
      </body>
    </html>
  `;

  // Auto-acknowledgement email for the visitor
  const visitorHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #0F243E; background-color: #FDFBF7; padding: 24px; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #E2E8F0; overflow: hidden; box-shadow: 0 4px 12px rgba(15, 36, 62, 0.05); }
          .header { background-color: #0F243E; color: #ffffff; padding: 32px 24px; text-align: center; }
          .logo-sub { font-size: 12px; font-weight: 700; color: #FEF08A; text-transform: uppercase; letter-spacing: 0.1em; }
          .content { padding: 32px 24px; }
          .motto { font-style: italic; font-weight: 700; color: #1B7A3E; margin-top: 24px; border-top: 1px solid #E2E8F0; padding-top: 16px; }
          .footer { background-color: #F8FAFC; padding: 16px 24px; text-align: center; font-size: 12px; color: #94A3B8; border-top: 1px solid #E2E8F0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo-sub">Gordonridge Community Development Initiative</div>
            <h1 style="margin: 8px 0 0 0; font-size: 22px; font-weight: 800; color: #ffffff;">Message Received</h1>
          </div>
          <div class="content">
            <p>Hello <strong>${cleanName}</strong>,</p>
            <p>Thank you for reaching out to Gordonridge Community Development Initiative.</p>
            <p>We have received your message regarding <strong>${cleanInterest}</strong>, and a member of our team will review it.</p>
            <p>Our community desk operates out of the 20 Gordonridge Place Community Centre, serving residents, seniors, youth, and families across Scarborough.</p>
            <div class="motto">
              Strong People. Strong Families. Stronger Community.
            </div>
          </div>
          <div class="footer">
            Gordonridge Community Development Initiative &bull; 20 Gordonridge Place Community Centre, Scarborough, Ontario
          </div>
        </div>
      </body>
    </html>
  `;

  // 3. Send via Nodemailer if Gmail credentials are provided, or log cleanly in simulated mode
  if (gmailUser && gmailPass) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    // Send notification to organization staff
    await transporter.sendMail({
      from: `"Gordonridge Website" <${gmailUser}>`,
      to: recipientEmail,
      replyTo: cleanEmail,
      subject: subjectType,
      text: `New submission from ${cleanName} (${cleanEmail}, ${cleanPhone || "N/A"})\nInterest: ${cleanInterest}\nDate: ${dateSubmitted}\n\nMessage:\n${cleanMessage || "N/A"}`,
      html: staffHtml,
    });

    // Send automated acknowledgment to the visitor
    try {
      await transporter.sendMail({
        from: `"Gordonridge Community Development Initiative" <${gmailUser}>`,
        to: cleanEmail,
        subject: "Thank you for contacting Gordonridge Community Development Initiative",
        text: `Thank you for reaching out to Gordonridge Community Development Initiative.\n\nWe have received your message and a member of our team will review it.\n\nStrong People. Strong Families. Stronger Community.`,
        html: visitorHtml,
      });
    } catch (ackError) {
      console.warn("Acknowledgement email could not be sent:", ackError);
    }

    return {
      success: true,
      message: "Thank you for reaching out! Your message has been received.",
    };
  } else {
    // Graceful fallback for local development or when credentials are not yet entered in .env.local
    console.log(
      `[SIMULATED EMAIL DELIVERY] To: ${recipientEmail} | Subject: ${subjectType}\n` +
      `Name: ${cleanName} | Email: ${cleanEmail} | Phone: ${cleanPhone || "N/A"} | Interest: ${cleanInterest}\n` +
      `Message: ${cleanMessage}\n` +
      `Date: ${dateSubmitted}\n` +
      `NOTE: Configure GMAIL_USER and GMAIL_APP_PASSWORD in .env.local to enable real SMTP delivery.`
    );

    return {
      success: true,
      message: "Thank you for reaching out! Your message has been received.",
    };
  }
}
