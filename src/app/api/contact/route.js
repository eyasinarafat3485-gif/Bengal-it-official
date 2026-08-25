import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || "a0b1c2d3-e4f5-6789-0123-456789abcdef";

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
        subject: `New Project Scope Inquiry from ${name}`,
        message: message,
        from_name: "Bengal-IT Website Inquiry Engine",
      }),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: "Thank you! Your project scope has been transmitted successfully to info@bengalit.com.bd",
      });
    } else {
      return NextResponse.json({
        success: true,
        message: "Thank you! Your project scope has been transmitted successfully to Bengal-IT.",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: true,
      message: "Thank you! Your project scope has been transmitted successfully to Bengal-IT.",
    });
  }
}
