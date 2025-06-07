// app/api/book-service/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { serviceName, name, phone, email, message } = body;

    // TODO: Replace this with actual email sending logic
    console.log("Booking request received:");
    console.log(`Service: ${serviceName}`);
    console.log(`Name: ${name}`);
    console.log(`Phone: ${phone}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    // Here you can call your email provider (e.g. SendGrid, Resend, Nodemailer)

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing booking:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
