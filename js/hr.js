/* =====================================================================
   HR — 퍼스트전산 공유 인사DB (Supabase · 읽기 전용) 연동
   ---------------------------------------------------------------------
   출처: 인사관리시스템 firstoa-hr.fly.dev 의 Supabase 미러
   - active_employees : 재직자만 (기본 사용)
   - managers         : 책임자(팀장/파트장/부파트장)
   - departments      : 부서 트리
   ▸ 읽기 전용(RLS): INSERT/UPDATE/DELETE 는 거부됩니다.
   ▸ 개인정보 보호를 위해 이 앱은 이름/부서/직함/사진만 조회합니다.
     (personal_phone·email 등 민감 컬럼은 불러오지 않음)
   ===================================================================== */
window.HR = (function () {
  const cfg = window.HR_CONFIG || {};
  const ok = !!(cfg.url && cfg.key && window.supabase);
  const client = ok ? window.supabase.createClient(cfg.url, cfg.key) : null;
  const PHOTO_BASE = "https://firstoa-hr.fly.dev/api/photos/";

  // 야유회에 필요한 최소 컬럼만 조회
  const COLS = "name,department,display_title,position,photo_filename";

  async function listActive() {
    if (!ok) return [];
    const { data, error } = await client
      .from("active_employees")
      .select(COLS)
      .order("department", { ascending: true })
      .order("name", { ascending: true });
    if (error) { console.error("[HR] active_employees 조회 실패:", error.message); return []; }
    return data || [];
  }

  async function listManagers() {
    if (!ok) return [];
    const { data, error } = await client.from("managers").select(COLS).order("name");
    if (error) { console.error("[HR] managers 조회 실패:", error.message); return []; }
    return data || [];
  }

  function photoUrl(filename) {
    return filename ? PHOTO_BASE + filename : "";
  }

  return { enabled: ok, listActive, listManagers, photoUrl };
})();
