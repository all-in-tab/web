"use client";

import { useState } from "react";

export default function FeatureRequestForm() {
  const [feature, setFeature] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/feature-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ feature, name }),
    });

    if (res.ok) {
      setStatus("success");
      setFeature("");
      setName("");
    } else {
      setStatus("error");
    }
  }

  return (
    <section className="max-w-2xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-center mb-2">원하는 기능을 알려주세요</h2>
      <p className="text-gray-500 text-center text-sm mb-8">
        필요한 기능을 제안해 주시면 개발 우선순위에 반영합니다.
      </p>

      {status === "success" ? (
        <div className="text-center py-10 text-green-600 font-medium">
          감사합니다! 소중한 의견을 잘 받았어요. ✅
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={feature}
            onChange={(e) => setFeature(e.target.value)}
            placeholder="어떤 기능이 있으면 좋겠나요? (예: 네이버 플레이스 리뷰도 연동해주세요)"
            rows={4}
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름 또는 연락처 (선택)"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          {status === "error" && (
            <p className="text-red-500 text-sm">전송에 실패했어요. 잠시 후 다시 시도해주세요.</p>
          )}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-[#FEE500] text-[#3C1E1E] font-semibold py-3 rounded-xl hover:bg-yellow-300 transition-colors disabled:opacity-60"
          >
            {status === "loading" ? "전송 중..." : "기능 요청하기"}
          </button>
        </form>
      )}
    </section>
  );
}
