/* =====================================================================
   Supabase 연결 설정
   ---------------------------------------------------------------------
   ▸ 아직 Supabase를 만들지 않았다면 아래를 그대로(빈 값) 두세요.
     → 브라우저 저장(localStorage)만으로 동작합니다. (오프라인 모드)

   ▸ Supabase 프로젝트를 만든 뒤:
     Supabase 대시보드 → Project Settings → API 에서
       - Project URL           →  url 에 붙여넣기
       - Project API keys(anon) →  key 에 붙여넣기
     저장하면 자동으로 클라우드 동기화 모드로 전환됩니다.
   ===================================================================== */
window.SUPABASE_CONFIG = {
  url: "https://lhklcyhfttquobhnnibn.supabase.co",   // 야유회용 프로젝트(yayu-2026)
  key: "sb_publishable_6bm0PwM6c6vQEoII3oPARw_lUklB1Y1", // anon public key
};

/* ---------------------------------------------------------------------
   퍼스트전산 공유 인사DB (Supabase · 읽기 전용)
   - 참석자 페이지에서 실제 재직자를 검색해 불러올 때 사용합니다.
   - 읽기 전용이라 이 앱에서 직원 정보를 수정할 수 없습니다.
     (모든 인사 변경은 firstoa-hr.fly.dev 에서만)
   --------------------------------------------------------------------- */
window.HR_CONFIG = {
  url: "https://wleudrdfyprxwbpjidke.supabase.co",
  key: "sb_publishable_woLsDr8yxttr_6ToYdq24g_52CRi5fV",
};
