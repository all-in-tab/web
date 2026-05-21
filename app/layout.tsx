import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "올인탭 — 카카오 생태계 통합 관리",
  description:
    "카카오맵 리뷰, 카카오채널 문의, 네이버 스마트스토어 순위를 하나의 대시보드에서 관리하는 소상공인 전용 SaaS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
