/* 공통 UI 헬퍼: 저장 토스트 + 저장모드 배지 */
window.UI = (function () {
  let toastEl;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "toast";
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toastEl.classList.remove("show"), 1400);
  }
  function modePill() {
    const cloud = window.STORE.mode === "cloud";
    return cloud
      ? '<span class="mode-pill mode-cloud">☁️ 클라우드 저장</span>'
      : '<span class="mode-pill mode-local">💾 브라우저 저장</span>';
  }
  // 간단한 HTML 이스케이프 (입력값 표시용)
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  return { toast, modePill, esc };
})();
