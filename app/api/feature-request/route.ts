import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { feature, name } = await req.json();

  if (!feature?.trim()) {
    return NextResponse.json({ error: "내용을 입력해주세요." }, { status: 400 });
  }

  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ error: "서버 설정 오류" }, { status: 500 });
  }

  const text = [
    "📬 *새 기능 요청이 도착했어요!*",
    `*요청 내용:* ${feature.trim()}`,
    name?.trim() ? `*요청자:* ${name.trim()}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "슬랙 전송 실패" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
