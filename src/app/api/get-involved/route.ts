import { NextResponse } from "next/server";
import { processSubmission, checkRateLimit, FormSubmissionPayload } from "@/lib/email";

export async function POST(request: Request) {
  try {
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
      name: body.name || body.fullName,
      email: body.email,
      phone: body.phone,
      interest: body.interest || body.pathway || "General Involvement",
      message: body.message,
      consent: Boolean(body.consent),
      honeypot: body.honeypot || body.website,
      type: "get-involved",
    };

    const result = await processSubmission(payload);
    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    console.error("Get Involved API route error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to submit request. Please try again." },
      { status: 400 }
    );
  }
}
