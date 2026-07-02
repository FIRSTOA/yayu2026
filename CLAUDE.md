# 2026 퍼스트전산 여름 야유회 웹앱

빌드 도구 없이 브라우저로 바로 여는 정적 웹앱 (HTML + CSS + JS). 페이지별로 파일이 분리돼 있고,
공통 내비게이션 / `css/style.css` / `js/data.js` 를 공유합니다.

- 페이지: `index.html`(홈) · `schedule.html`(일정표) · `attendees.html`(참석자) · `budget.html`(예산) · `checklist.html`(회사 준비물)
- 데이터 계층: `js/store.js` (localStorage 또는 야유회용 Supabase). 설정은 `js/config.js` 의 `SUPABASE_CONFIG`.
- 인사DB 연동: `js/hr.js` (아래 참고). 참석자 페이지에서 재직자를 검색해 불러옵니다.
- 배포: `배포_가이드.md` (Supabase → GitHub → Vercel).

---

## 🏢 퍼스트전산 공유 인사DB (Supabase)

이 프로젝트는 인사 정보를 자체 관리하지 않고 인사관리시스템(firstoa-hr.fly.dev)의 Supabase 미러를 조회한다.

### 접속
- URL: `https://wleudrdfyprxwbpjidke.supabase.co`
- Anon Key: `sb_publishable_woLsDr8yxttr_6ToYdq24g_52CRi5fV`
- 권한: 읽기 전용 (RLS)

### 환경변수
```
NEXT_PUBLIC_SUPABASE_URL=https://wleudrdfyprxwbpjidke.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_woLsDr8yxttr_6ToYdq24g_52CRi5fV
```

### 사용 가능한 뷰/테이블
- `active_employees` — 재직자만 (기본 사용)
- `managers` — 책임자(팀장/파트장/부파트장)
- `employees` — 전체 (퇴사자 포함)
- `departments` — 부서 트리

### employees 컬럼
`id, emp_no, name, department, position, display_title, email, work_phone, personal_phone, photo_filename, main_task, sub_task, join_date, status, role, managed_depts`

### 사진 URL 패턴
`https://firstoa-hr.fly.dev/api/photos/{photo_filename}`

### 주의
- 읽기 전용 (INSERT/UPDATE/DELETE 시도 시 RLS 거부)
- 모든 변경은 firstoa-hr.fly.dev에서만
- 급여/평가/비밀번호는 여기 없음 (보안 격리)

### 이 앱에서의 사용 메모
- `js/hr.js` 가 `active_employees` 에서 **이름·부서·직함·사진(photo_filename)만** 조회한다 (개인정보 최소화 — personal_phone·email 은 불러오지 않음).
- 참석자 페이지의 "👥 인사DB에서 불러오기" 로 직원을 참석자에 추가하면, 야유회 전용 정보(참석/버스/특이사항)는 `js/store.js`(localStorage 또는 야유회용 Supabase)에 저장된다. 인사DB에는 아무것도 쓰지 않는다.
