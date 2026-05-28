import Image from "next/image";
import FeatureRequestForm from "./components/FeatureRequestForm";

const FEATURES = [
  {
    icon: "⭐",
    title: "카카오맵 리뷰 통합 인박스",
    description:
      "신규 리뷰를 자동 수집하고 15분 이내 알림톡으로 즉시 알려드립니다. 미응답 리뷰를 강조 표시하고 올인탭에서 바로 답글을 작성·게시하세요.",
  },
  {
    icon: "💬",
    title: "카카오채널 문의 통합 인박스",
    description:
      "연동된 카카오채널의 고객 문의를 한 곳에서 수신합니다. 읽음·미읽음 상태 관리와 우선순위 정렬로 빠른 응대가 가능합니다.",
  },
  {
    icon: "📝",
    title: "빠른 답글 템플릿",
    description:
      "별점(1~5점)별 기본 템플릿을 제공합니다. 이모지 사용 여부, 존댓말 스타일 등 사장님 말투로 커스터마이징해 저장하세요.",
  },
  {
    icon: "🏪",
    title: "멀티 매장 지원",
    description:
      "계정 하나로 여러 매장을 등록하고 탭 전환 UI로 편리하게 관리하세요. 플랜에 따라 최대 20개 매장까지 지원합니다.",
  },
];

const PLANS = [
  {
    name: "무료",
    price: "0원",
    stores: "매장 1개",
    features: ["리뷰 알림 30일 체험", "답글 10건/월"],
    highlight: false,
  },
  {
    name: "베이직",
    price: "9,900원",
    period: "/월",
    stores: "매장 1개",
    features: ["리뷰·문의 무제한", "카카오 알림톡"],
    highlight: false,
  },
  {
    name: "스탠다드",
    price: "29,000원",
    period: "/월",
    stores: "매장 5개",
    features: ["키워드 순위 추적 20개", "주간 자동 보고서"],
    highlight: true,
  },
  {
    name: "프로",
    price: "79,000원",
    period: "/월",
    stores: "매장 20개",
    features: ["고객사 관리", "커스텀 보고서", "팀 계정"],
    highlight: false,
  },
];

const PERSONAS = [
  { emoji: "🍽️", label: "음식점·카페 사장님" },
  { emoji: "💇", label: "뷰티·병원·학원 원장" },
  { emoji: "🛍️", label: "스마트스토어 셀러" },
  { emoji: "📊", label: "프리랜서 마케터·대행사" },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="올인탭 로고" width={32} height={32} className="rounded-lg" />
              <span className="text-xl font-bold tracking-tight">올인탭</span>
            </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition-colors">기능</a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">요금제</a>
          </nav>
          <a
            href="#pricing"
            className="bg-[#FEE500] text-[#3C1E1E] text-sm font-semibold px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors"
          >
            무료로 시작하기
          </a>
        </div>
      </header>

      {/* 히어로 */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
        <p className="text-sm font-medium text-yellow-600 mb-4">카카오 생태계 전용 소상공인 SaaS</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
          카카오 리뷰·문의를<br />
          하나로 관리하세요
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10">
          카카오맵 리뷰, 카카오채널 문의, 네이버 스마트스토어 순위를
          하나의 대시보드에서 확인하고 즉시 대응하세요.
        </p>
        <a
          href="#pricing"
          className="inline-block bg-[#FEE500] text-[#3C1E1E] text-base font-bold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-colors shadow-sm"
        >
          무료로 시작하기 →
        </a>

        {/* 타깃 페르소나 태그 */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {PERSONAS.map((p) => (
            <span
              key={p.label}
              className="bg-gray-50 border border-gray-200 text-sm text-gray-600 px-4 py-2 rounded-full"
            >
              {p.emoji} {p.label}
            </span>
          ))}
        </div>
      </section>

      {/* 문제 → 해결 섹션 */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <p className="text-sm font-semibold text-red-500 mb-4">기존 방법 😓</p>
              <ul className="space-y-3 text-gray-600">
                <li>카카오맵 앱 따로 열고, 채널톡 따로 확인</li>
                <li>카카오채널 문의 수동 확인으로 답변 지연</li>
                <li>매일 직접 검색해서 키워드 순위 확인</li>
                <li>고객사별 카카오 채널 탭 전환 반복</li>
              </ul>
            </div>
            <div className="bg-[#FEE500] rounded-2xl p-8">
              <p className="text-sm font-semibold text-[#3C1E1E] mb-4">올인탭 ✅</p>
              <ul className="space-y-3 text-[#3C1E1E] font-medium">
                <li>하나의 화면에서 확인 + 즉시 알림</li>
                <li>통합 인박스 + 자동 알림으로 빠른 응대</li>
                <li>자동 순위 추적 + 일간 알림</li>
                <li>멀티 계정 대시보드로 한 번에 관리</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 기능 */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-4">핵심 기능</h2>
        <p className="text-gray-500 text-center mb-14">소상공인에게 꼭 필요한 기능만 담았습니다</p>
        <div className="grid md:grid-cols-2 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 요금제 */}
      <section id="pricing" className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">요금제</h2>
          <p className="text-gray-500 text-center mb-14">30일 무료 체험 후 결정하세요</p>
          <div className="grid md:grid-cols-4 gap-5">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-7 flex flex-col ${
                  plan.highlight
                    ? "bg-[#3C1E1E] text-white shadow-xl scale-105"
                    : "bg-white border border-gray-200"
                }`}
              >
                {plan.highlight && (
                  <span className="text-xs font-bold bg-[#FEE500] text-[#3C1E1E] px-2 py-1 rounded-full self-start mb-3">
                    인기
                  </span>
                )}
                <p className={`text-sm font-medium mb-1 ${plan.highlight ? "text-gray-300" : "text-gray-500"}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-2xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className={`text-sm ${plan.highlight ? "text-gray-300" : "text-gray-400"}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`text-xs mb-5 ${plan.highlight ? "text-gray-400" : "text-gray-400"}`}>
                  {plan.stores}
                </p>
                <ul className="space-y-2 flex-1 mb-6">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`text-sm flex items-start gap-2 ${plan.highlight ? "text-gray-200" : "text-gray-600"}`}
                    >
                      <span className="mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    plan.highlight
                      ? "bg-[#FEE500] text-[#3C1E1E] hover:bg-yellow-300"
                      : "border border-gray-300 hover:border-gray-400 text-gray-700"
                  }`}
                >
                  시작하기
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">지금 바로 시작하세요</h2>
        <p className="text-gray-500 mb-8">
          신용카드 없이 30일 무료 체험. 언제든 취소 가능합니다.
        </p>
        <a
          href="#"
          className="inline-block bg-[#FEE500] text-[#3C1E1E] text-base font-bold px-10 py-4 rounded-xl hover:bg-yellow-300 transition-colors shadow-sm"
        >
          카카오로 무료 시작하기
        </a>
      </section>

      <FeatureRequestForm />

      {/* 푸터 */}
      <footer className="border-t border-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span className="font-semibold text-gray-700">올인탭</span>
          <span>© 2025 AllInTab. All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}
