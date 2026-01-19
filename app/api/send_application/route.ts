import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { phone, name, message } = await req.json();

    if (!phone) {
      return NextResponse.json(
        { error: "Телефон обов'язковий" },
        { status: 400 },
      );
    }

    const text = `
      📥 <b>Нова заявка</b>

      📞 <b>Телефон:</b> <code>${phone}</code>
      👤 <b>Им'я:</b> ${name || "-"}

      💬 <b>Повiдомлення:</b>
      ${message || "-"}
    `;

    const response = await fetch(
      `https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.TG_CHAT_ID,
          text,
          parse_mode: "HTML",
        }),
      },
    );

    const tgBody = await response.text();

    if (!response.ok) {
      throw new Error("Telegram API error");
    }

    console.log("TG STATUS:", response.status);
    console.log("TG BODY:", tgBody);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
  }
}
