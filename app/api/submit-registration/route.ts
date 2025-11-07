import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // console.log("📤 Sending to Google Sheets:", body);
    
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxh38fRx_mNlzaRcY26CvuQFP8WeWDFFG5-UD2k1W-W5Ned8B2oLCbwmHO9YLI4Adq91Q/exec",
      {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        redirect: "follow",
      }
    );

    const text = await response.text();
    // console.log("📥 Response from Google Sheets:", text);
    
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { result: "success" };
    }
    
    return NextResponse.json({ 
      success: true, 
      data 
    });
    
  } catch (error) {
    console.error("❌ API Error:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : "Unknown error" 
      },
      { status: 500 }
    );
  }
}