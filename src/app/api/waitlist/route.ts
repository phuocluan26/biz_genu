import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone } = body;

    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;
    
    if (!googleScriptUrl) {
      console.error("Chưa cấu hình GOOGLE_SCRIPT_URL");
      return NextResponse.json({ error: 'Lỗi cấu hình hệ thống' }, { status: 500 });
    }

    // Gửi data sang Google Sheet
    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      body: JSON.stringify({ name, email, phone }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: 'Lưu thất bại' }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Lỗi server' }, { status: 500 });
  }
}