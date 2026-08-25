import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || "d9e75cb9-cae9-429b-bb80-aaf80932fa96";

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: name,
        email: email,
        replyto: email,
        subject: `New Project Scope Inquiry from ${name}`,
        message: message,
        from_name: `${name} (Bengal-IT Client)`,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: "Thank you! Your project scope has been transmitted successfully to Bengal-IT.",
      });
    } else {
      return NextResponse.json(
        { success: false, message: result.message || "Failed to transmit message." },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message || "Server error occurred." },
      { status: 500 }
    );
  }
}
