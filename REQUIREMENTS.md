# 올인탭_제품개요_기술스택

# 올인탭 (AllInTab) — 제품 개요 및 기술 스택 정의서

> **버전:** v0.2 | **작성일:** 2025년 5월
**포지셔닝:** 카카오 생태계 전용 소상공인 통합 관리 SaaS
> 

---

## 1. 제품 개요

### 1-1. 한 줄 정의

> 카카오맵 리뷰·카카오채널 문의·네이버 스마트스토어 순위를 하나의 대시보드에서 관리하는 소상공인 전용 SaaS
> 

### 1-2. 배경

네이버 스마트플레이스는 자체 앱(스마트플레이스 센터)을 제공한다.
그러나 카카오 생태계(카카오맵 리뷰, 카카오채널 문의)를 통합 관리하는 독립 도구는 **현재 존재하지 않는다.**

- 카카오맵 월간 사용자 3,000만명 이상
- 카카오채널 운영 비즈니스 수백만 개
- 기존 글로벌 SaaS(Birdeye, Semrush 등)는 카카오 생태계 미지원

### 1-3. 핵심 가치 제안

| 타깃 | 기존 방법 | 올인탭 |
| --- | --- | --- |
| 음식점·카페 사장님 | 카카오맵 앱 따로 열고, 채널톡 따로 확인 | 하나의 화면에서 확인 + 알림 |
| 소규모 쇼핑몰 | 카카오채널 문의 수동 확인, 답변 지연 | 통합 인박스 + AI 초안 |
| 스마트스토어 셀러 | 매일 직접 검색해서 키워드 순위 확인 | 자동 추적 + 일간 알림 |
| 프리랜서 마케터 | 고객사별 카카오 채널 탭 전환 반복 | 멀티 계정 대시보드 |

---

## 2. 핵심 기능 정의

### 2-1. MVP (v0.1) — 출시 목표

### 카카오맵 리뷰 통합 인박스

- 사용자가 연동한 카카오맵 매장의 신규 리뷰 자동 수집
- 별점·날짜·내용 표시, 미응답 리뷰 강조
- 카카오톡 알림톡으로 새 리뷰 즉시 알림 (15분 이내)
- 올인탭 내에서 직접 답글 작성·게시

### 카카오채널 문의 통합 인박스

- 연동된 카카오채널의 고객 문의를 통합 수신
- 읽음·미읽음 상태 관리, 우선순위 정렬
- 올인탭에서 직접 답변 발송

### 빠른 답글 템플릿

- 별점(1~5점)별 기본 템플릿 제공
- 사장님 말투 커스터마이징 저장 (이모지 사용 여부, 존댓말 스타일)

### 멀티 매장 지원

- 계정 하나로 최대 N개 매장 추가 (플랜별 상이)
- 매장별 탭 전환 UI

### 2-2. v0.2 — MVP 이후

- **네이버 스마트스토어 키워드 순위 추적**
    - 커머스 API 연동 (사용자 API 키 직접 등록 방식)
    - 키워드별 일간 순위 그래프, 전일 대비 변동 알림
- **주간 자동 보고서**
    - 매주 월요일 카카오 알림톡으로 주간 리뷰·문의 요약 발송

### 2-3. v0.3 — 성장 단계

- **경쟁 매장 모니터링** (카카오맵 평점·리뷰 수 추이)
- **AI 답글 초안 생성** (Claude API 또는 OpenAI API 연동)
- **마케터 멀티 클라이언트 플랜** (고객사 10개, 보고서 자동 생성)

---

## 3. 고객 및 요금제

### 3-1. 타깃 고객

| 페르소나 | 규모 | 핵심 니즈 | 지불 의향 |
| --- | --- | --- | --- |
| 음식점·카페 사장님 | 국내 80만+ | 리뷰 알림 + 빠른 답글 | 월 9,900~29,000원 |
| 뷰티·병원·학원 원장 | 국내 60만+ | 카카오채널 문의 통합 | 월 9,900~29,000원 |
| 스마트스토어 셀러 | 활성 55만명 | 키워드 순위 추적 | 월 9,900~29,000원 |
| 프리랜서 마케터·대행사 | 5만명 | 멀티 계정, 보고서 자동화 | 월 49,000~99,000원 |

### 3-2. 요금제

| 플랜 | 월 요금 | 매장 수 | 핵심 기능 |
| --- | --- | --- | --- |
| 무료 | 0원 | 1개 | 리뷰 알림 30일 체험, 답글 10건/월 |
| 베이직 | 9,900원 | 1개 | 리뷰·문의 무제한, 알림톡 |
| 스탠다드 | 29,000원 | 5개 | 키워드 순위 추적 20개, 주간 보고서 |
| 프로 | 79,000원 | 20개 | 고객사 관리, 커스텀 보고서, 팀 계정 |

---

## 4. API 연동 명세

### 4-1. 카카오 API (핵심)

| API | 용도 | 사업자 등록 필요 | 비고 |
| --- | --- | --- | --- |
| 카카오 로그인 | 사용자 소셜 로그인 | ❌ (개인 가능) | OAuth 2.0 |
| 카카오맵 (로컬 API) | 매장 검색·정보 조회 | ❌ | REST API |
| 카카오톡 채널 API | 문의 수신·발신 | ✅ (비즈 앱) | 비즈니스 채널 심사 3~5일 |
| 카카오맵 리뷰 API | 리뷰 수집·답글 | ✅ (비즈 앱) | OAuth 위임 방식 |
| 카카오 알림톡 | 사용자에게 알림 발송 | ✅ | 솔라피·비즈고 대행사 이용 |

### 4-2. 네이버 API (v0.2~)

| API | 용도 | 사업자 등록 필요 | 비고 |
| --- | --- | --- | --- |
| 네이버 커머스 API | 스마트스토어 상품·주문 | ❌ (셀러 계정) | 사용자가 직접 API 키 등록 |
| 네이버 검색 API (NCP) | 키워드 검색량 조회 | ❌ (개인 가능) | Client ID/Secret |
| 네이버 쇼핑 인사이트 | 검색 트렌드 | ❌ (개인 가능) | NCP 콘솔 Application 등록 |

---

## 5. 기술 스택

### 5-1. 언어 및 프레임워크

```
Language   : Java 21 (LTS)
Framework  : Spring Boot 3.3.x
Build Tool : Gradle 8.x (Kotlin DSL)
```

**Java 21 선택 이유**
- Virtual Threads (Project Loom) — 카카오 API 폴링, 알림톡 발송 등 I/O 집약 작업을 경량 스레드로 처리
- Record, Pattern Matching 등 최신 문법으로 코드 간결화
- Spring Boot 3.x의 Native Image 지원으로 향후 컨테이너 시작 시간 단축 가능

### 5-2. 백엔드 상세

```
Web Layer       : Spring MVC (REST API)
Security        : Spring Security 6 + OAuth2 Client
                  (카카오 소셜 로그인)
ORM             : Spring Data JPA (Hibernate 6)
Query           : QueryDSL 5.x (복잡한 동적 쿼리)
Validation      : Jakarta Bean Validation (Hibernate Validator)
Scheduler       : Spring Scheduler (@Scheduled)
                  → 리뷰 수집 15분 주기, 순위 추적 1일 1회
Async           : Spring @Async + Virtual Threads (Java 21)
                  → 알림톡 발송 비동기 처리
```

### 5-3. 데이터베이스

```
Primary DB  : PostgreSQL 16
  - 사용자, 매장, 리뷰, 문의, 구독 등 핵심 데이터
  - AWS RDS (db.t4g.micro → 초기, 이후 스케일업)

Cache / Queue : Redis 7.x (AWS ElastiCache)
  - 리뷰 수집 결과 임시 저장 (중복 감지)
  - 알림 발송 큐 (List 자료구조)
  - API Rate Limit 카운터
  - 세션 저장 (Spring Session + Redis)
```

### 5-4. 외부 연동 클라이언트

```java
// HTTP 클라이언트
Spring WebClient (Reactor Netty 기반)
  - 카카오 API, 네이버 API 비동기 호출

// 알림톡 발송
솔라피 SDK (Java)  혹은  REST API 직접 호출
  - 카카오 알림톡, SMS Fallback
```

### 5-5. 프론트엔드

> 프론트엔드(Next.js)는 별도 레포지토리(`allintab-web`)에서 관리한다. 이 레포지토리는 Spring Boot API 서버만 포함한다.

```
Framework  : Next.js 14 (React 18, App Router)  [별도 레포]
Language   : TypeScript
Styling    : Tailwind CSS
상태관리   : Zustand
HTTP       : Axios + React Query
```

### 5-6. 인프라 (AWS)

```
컨테이너   : Docker + Amazon ECS Fargate
              (초기엔 단일 EC2 t3.small로 시작, 이후 전환)

CI/CD      : GitHub Actions
              → 테스트 → Docker Build → ECR Push → ECS 배포

Static     : Amazon S3 + CloudFront
              (Next.js 정적 자산, 사용자 업로드 이미지)

DB         : Amazon RDS (PostgreSQL)
Cache      : Amazon ElastiCache (Redis)
Secret     : AWS Secrets Manager
              (카카오 API 키, DB 패스워드 등 환경변수 관리)

Monitoring : AWS CloudWatch + Spring Actuator
Log        : Amazon CloudWatch Logs
              (구조화 로그: Logback + JSON Encoder)
```

### 5-7. 전체 아키텍처 다이어그램

```
[사용자 (모바일 브라우저)]
        │
        ▼
[Next.js 프론트엔드] ──── S3 + CloudFront   (별도 레포: allintab-web)
        │  REST API 호출
        ▼
[Spring Boot API 서버] ── ECS Fargate (Java 21)   ← 이 레포
   │         │
   │         ├── [PostgreSQL RDS]  ← 핵심 데이터
   │         ├── [Redis ElastiCache] ← 캐시·큐
   │         └── [AWS Secrets Manager] ← 키 관리
   │
   ├── [카카오 API] ── 카카오맵 리뷰, 채널 문의, 알림톡
   ├── [네이버 NCP API] ── 검색, 쇼핑 인사이트
   ├── [네이버 커머스 API] ── 스마트스토어 (사용자 키)
   └── [솔라피 API] ── 알림톡 발송 대행
```

---

## 6. 프로젝트 구조

> 이 레포지토리는 Spring Boot API 서버만 포함한다. 프론트엔드는 별도 레포지토리(`allintab-web`)에서 관리한다.

```
allintab-server/                   # 이 레포지토리
├── src/main/java/io/allintab/
│   ├── domain/
│   │   ├── user/                  # 사용자, 인증
│   │   ├── store/                 # 매장 정보
│   │   ├── review/                # 리뷰 수집·관리
│   │   ├── channel/               # 카카오채널 문의
│   │   ├── ranking/               # 키워드 순위 추적
│   │   ├── notification/          # 알림 발송
│   │   └── subscription/          # 구독·결제
│   ├── infra/
│   │   ├── kakao/                 # 카카오 API 클라이언트
│   │   ├── naver/                 # 네이버 API 클라이언트
│   │   ├── solapi/                # 알림톡 발송
│   │   └── scheduler/             # 주기적 수집 스케줄러
│   └── global/
│       ├── config/                # Spring 설정
│       ├── exception/             # 공통 예외 처리
│       └── security/              # OAuth2, JWT
├── build.gradle.kts
└── docker-compose.yml             # 로컬 개발 환경 (PostgreSQL + Redis)
```

---

## 7. 핵심 도메인 모델 (ERD 요약)

```sql
-- 사용자
users (id, kakao_id, email, name, plan_type, created_at)

-- 매장 (카카오맵 연동)
stores (id, user_id, kakao_place_id, name, category, connected_at)

-- 카카오맵 리뷰
reviews (id, store_id, kakao_review_id, rating, content,
         author_name, reviewed_at, replied_at, reply_content)

-- 카카오채널 문의
channel_messages (id, store_id, sender_id, content,
                  received_at, replied_at, reply_content, status)

-- 키워드 순위 (v0.2)
keyword_rankings (id, store_id, keyword, rank, platform,
                  tracked_at)

-- 구독
subscriptions (id, user_id, plan_type, started_at,
               next_billing_at, status)
```

---

## 8. 주요 기술적 결정 사항

### 8-1. 리뷰 수집 방식

카카오맵 리뷰 API는 사용자(사장님) OAuth 토큰으로만 접근 가능하다.
→ **사용자별 OAuth Access Token을 암호화하여 DB에 저장하고, 스케줄러가 주기적으로 리뷰를 pull 하는 방식**으로 구현.

```
[스케줄러 - 15분마다]
  foreach 연동된 매장:
    1. 해당 매장 사용자의 OAuth Token 복호화
    2. 카카오맵 API 호출 → 최신 리뷰 조회
    3. DB에 저장된 마지막 리뷰 ID와 비교 → 신규 리뷰만 저장
    4. 신규 리뷰 있으면 → Redis 알림 큐에 push
    5. 알림 발송 워커 → 솔라피 알림톡 발송
```

### 8-2. OAuth Token 보안

카카오 Access Token은 민감 정보이므로 반드시 암호화 저장.

```java
// AES-256-GCM 암호화 후 DB 저장
// AWS KMS 또는 자체 관리 키 사용
// Token 만료 시 Refresh Token으로 자동 갱신
```

### 8-3. API Rate Limit 대응

카카오 API는 앱 단위로 호출 제한이 있음.
→ Redis로 요청 카운터 관리, 임박 시 요청 간격 조절.

```java
// 매장 수 증가에 따른 호출량 계산
// 1,000 매장 × 15분 주기 × 24시간 = 약 9.6만 호출/일
// 카카오 API 한도 초과 전에 카카오 파트너십 협의 시작
```

### 8-4. 결제 연동

초기 MVP는 **포트원(구 아임포트) + 카카오페이** 연동.

```
포트원 SDK (Java) → 카카오페이 정기결제
→ Webhook으로 결제 성공/실패 수신
→ 구독 상태 업데이트
```

---

## 9. 개발 환경 구성

### 로컬 환경 (docker-compose)

```yaml
# docker-compose.yml
services:
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: allintab
      POSTGRES_USER: allintab
      POSTGRES_PASSWORD: local_password
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
```

### 주요 의존성 (build.gradle.kts)

```kotlin
dependencies {
    // Spring Boot
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    implementation("org.springframework.boot:spring-boot-starter-data-redis")
    implementation("org.springframework.boot:spring-boot-starter-security")
    implementation("org.springframework.boot:spring-boot-starter-oauth2-client")
    implementation("org.springframework.boot:spring-boot-starter-webflux") // WebClient
    implementation("org.springframework.boot:spring-boot-starter-validation")
    implementation("org.springframework.boot:spring-boot-starter-actuator")

    // DB
    runtimeOnly("org.postgresql:postgresql")
    implementation("com.querydsl:querydsl-jpa:5.1.0:jakarta")
    annotationProcessor("com.querydsl:querydsl-apt:5.1.0:jakarta")
    annotationProcessor("jakarta.annotation:jakarta.annotation-api")

    // JWT
    implementation("io.jsonwebtoken:jjwt-api:0.12.6")
    runtimeOnly("io.jsonwebtoken:jjwt-impl:0.12.6")
    runtimeOnly("io.jsonwebtoken:jjwt-jackson:0.12.6")

    // Utility
    implementation("org.mapstruct:mapstruct:1.6.2")
    annotationProcessor("org.mapstruct:mapstruct-processor:1.6.2")

    // Test
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testImplementation("org.springframework.security:spring-security-test")
    testImplementation("io.rest-assured:rest-assured:5.4.0")
    testImplementation("org.testcontainers:postgresql:1.20.4")
    testImplementation("org.testcontainers:junit-jupiter:1.20.4")
}
```

---

## 10. 개발 로드맵

```
2025 Q3  ■ 개발 환경 세팅 (Docker, Spring Boot 기본 구조)
          ■ 카카오 OAuth 로그인
          ■ 카카오맵 매장 연동 + 리뷰 수집 스케줄러
          ■ 카카오채널 문의 통합 인박스
          ■ 알림톡 발송 (솔라피 연동)
          ■ 베타 테스터 10명 운영

2025 Q4  ■ 구독·결제 (포트원 + 카카오페이)
          ■ 공개 베타 출시 (무료 플랜)
          ■ 주간 자동 보고서
          ■ 스마트스토어 키워드 순위 추적 v0.2

2026 Q1  ■ 경쟁 매장 모니터링
          ■ AI 답글 초안 생성 (Claude API)
          ■ 마케터 프로 플랜 출시

2026 Q2  ■ 네이버 스마트플레이스 파트너십 협의
          ■ 성능 최적화 (ECS 오토스케일링)
```

---

## 11. 리스크 관리

| 리스크 | 대응 방안 |
| --- | --- |
| 카카오 API 정책 변경 | 공식 파트너 프로그램 조기 가입, API 버전 추상화 레이어 설계 |
| OAuth Token 탈취 | AES-256 암호화 저장, AWS KMS 키 관리, 주기적 키 로테이션 |
| 스케줄러 과부하 (매장 1만+ 시) | Redis Queue + 멀티 워커로 분산 처리, ECS 태스크 수평 확장 |
| 1인 개발 번아웃 | MVP 범위 엄격히 제한, Testcontainers 기반 자동화 테스트로 수동 QA 최소화 |

---

*문서 끝 — 다음 단계: ERD 상세 설계 → API 명세 작성 → 개발 착수*