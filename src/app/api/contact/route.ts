import { NextResponse } from "next/server";
import { processSubmission, checkRateLimit, FormSubmissionPayload } from "@/lib/email";

export async function POST(request: Request) {
  try {
    // Basic IP rate limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a few minutes before trying again." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const payload: FormSubmissionPayload = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      interest: body.interest || body.topic || "General Inquiry",
      message: body.message,
      consent: Boolean(body.consent),
      honeypot: body.honeypot || body.website,
      type: body.type || "contact",
    };

    const result = await processSubmission(payload);
    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    console.error("Contact API route error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send message. Please try again." },
      { status: 400 }
    );
  }
}
