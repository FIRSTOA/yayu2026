/* =====================================================================
   STORE — 공통 데이터 계층 (편집/저장)
   ---------------------------------------------------------------------
   ▸ config.js 에 Supabase url/key 가 있으면  → 클라우드 동기화(cloud)
   ▸ 없으면                                    → 브라우저 저장(local)
   두 모드 모두 동일한 async API 로 동작합니다.

   테이블: attendees / budget_items / schedule_items / checklist_items
   설정  : settings (budget_total 등)
   ===================================================================== */
window.STORE = (function () {
  const cfg = window.SUPABASE_CONFIG || {};
  const hasCloud = !!(cfg.url && cfg.key && window.supabase);
  const client = hasCloud ? window.supabase.createClient(cfg.url, cfg.key) : null;
  const mode = hasCloud ? "cloud" : "local";

  const uid = () =>
    (window.crypto && crypto.randomUUID)
      ? crypto.randomUUID()
      : "id-" + Math.random().toString(16).slice(2) + performance.now();

  /* ---------- 시드(초기값) : data.js(window.YAYU)에서 생성 ---------- */
  function buildSeed() {
    const Y = window.YAYU;
    const attendees = Y.attendees.map((a, i) => ({ id: uid(), sort: i, ...a }));

    const budget_items = Y.budget.items.map((b, i) => ({ id: uid(), sort: i, ...b }));

    const schedule_items = [];
    Y.schedule.forEach((d) => {
      d.rows.forEach((r, i) =>
        schedule_items.push({
          id: uid(), sort: schedule_items.length,
          day: d.day, short: d.short, ...r,
        })
      );
    });

    const checklist_items = [];
    Object.entries(Y.checklist).forEach(([grp, g]) => {
      g.items.forEach((it) =>
        checklist_items.push({ id: uid(), sort: checklist_items.length, grp, ...it })
      );
    });

    const settings = { budget_total: Y.budget.total };
    return { attendees, budget_items, schedule_items, checklist_items, settings };
  }

  /* ---------- 로컬 저장 ---------- */
  const LS = "yayu:v4:"; // 참석/미참석 분류(attend) 추가로 버전업(재시드)
  function lsGet(table) {
    const raw = localStorage.getItem(LS + table);
    return raw ? JSON.parse(raw) : null;
  }
  function lsSet(table, arr) {
    localStorage.setItem(LS + table, JSON.stringify(arr));
  }
  function ensureSeed() {
    if (lsGet("attendees")) return;
    const seed = buildSeed();
    lsSet("attendees", seed.attendees);
    lsSet("budget_items", seed.budget_items);
    lsSet("schedule_items", seed.schedule_items);
    lsSet("checklist_items", seed.checklist_items);
    localStorage.setItem(LS + "settings", JSON.stringify(seed.settings));
  }

  /* ===================== 공개 API ===================== */
  async function list(table) {
    if (mode === "cloud") {
      const { data, error } = await client.from(table).select("*").order("sort", { ascending: true });
      if (error) throw error;
      return data;
    }
    ensureSeed();
    return (lsGet(table) || []).slice().sort((a, b) => (a.sort ?? 0) - (b.sort ?? 0));
  }

  // 정렬값: DB int 범위(약 21억)를 넘지 않도록 '초' 단위 사용 (Date.now()는 ms라 범위 초과)
  const nextSort = () => Math.floor(Date.now() / 1000);

  async function add(table, obj) {
    const row = { id: uid(), sort: nextSort(), ...obj };
    if (mode === "cloud") {
      const payload = { ...obj, sort: obj.sort ?? nextSort() };
      const { data, error } = await client.from(table).insert(payload).select().single();
      if (error) throw error;
      return data;
    }
    ensureSeed();
    const arr = lsGet(table) || [];
    arr.push(row);
    lsSet(table, arr);
    return row;
  }

  async function update(table, id, patch) {
    if (mode === "cloud") {
      const { error } = await client.from(table).update(patch).eq("id", id);
      if (error) throw error;
      return;
    }
    ensureSeed();
    const arr = lsGet(table) || [];
    const i = arr.findIndex((r) => r.id === id);
    if (i >= 0) { arr[i] = { ...arr[i], ...patch }; lsSet(table, arr); }
  }

  async function remove(table, id) {
    if (mode === "cloud") {
      const { error } = await client.from(table).delete().eq("id", id);
      if (error) throw error;
      return;
    }
    ensureSeed();
    const arr = (lsGet(table) || []).filter((r) => r.id !== id);
    lsSet(table, arr);
  }

  async function getSetting(key, fallback) {
    if (mode === "cloud") {
      const { data, error } = await client.from("settings").select("value").eq("key", key).maybeSingle();
      if (error) throw error;
      return data ? data.value : fallback;
    }
    ensureSeed();
    const s = JSON.parse(localStorage.getItem(LS + "settings") || "{}");
    return key in s ? s[key] : fallback;
  }

  async function setSetting(key, value) {
    if (mode === "cloud") {
      const { error } = await client.from("settings").upsert({ key, value });
      if (error) throw error;
      return;
    }
    ensureSeed();
    const s = JSON.parse(localStorage.getItem(LS + "settings") || "{}");
    s[key] = value;
    localStorage.setItem(LS + "settings", JSON.stringify(s));
  }

  /* 전체 초기화(엑셀 원본값으로 되돌리기) */
  async function resetLocal() {
    ["attendees", "budget_items", "schedule_items", "checklist_items", "settings"]
      .forEach((t) => localStorage.removeItem(LS + t));
    ensureSeed();
  }

  /* 내보내기 / 불러오기 (JSON 백업) */
  async function exportAll() {
    const [attendees, budget_items, schedule_items, checklist_items] = await Promise.all([
      list("attendees"), list("budget_items"), list("schedule_items"), list("checklist_items"),
    ]);
    const budget_total = await getSetting("budget_total", window.YAYU.budget.total);
    return { attendees, budget_items, schedule_items, checklist_items, budget_total };
  }
  function importAllLocal(dump) {
    if (dump.attendees) lsSet("attendees", dump.attendees);
    if (dump.budget_items) lsSet("budget_items", dump.budget_items);
    if (dump.schedule_items) lsSet("schedule_items", dump.schedule_items);
    if (dump.checklist_items) lsSet("checklist_items", dump.checklist_items);
    const s = JSON.parse(localStorage.getItem(LS + "settings") || "{}");
    if (dump.budget_total != null) s.budget_total = dump.budget_total;
    localStorage.setItem(LS + "settings", JSON.stringify(s));
  }

  return {
    mode, list, add, update, remove, getSetting, setSetting,
    resetLocal, exportAll, importAllLocal,
    // 화면용 상수(그룹 제목/메모) — data.js 의 checklist 구조에서 생성
    checklistMeta: Object.fromEntries(
      Object.entries(window.YAYU.checklist).map(([k, g]) => [k, { title: g.title, note: g.note }])
    ),
  };
})();
