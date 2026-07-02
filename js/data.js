/* =====================================================================
   2026 퍼스트전산 여름 야유회 — 공통 데이터
   출처: "26년_야유회_모음.xlsx" (야유회 일정표 / 찐 참석자만 / 견적체크 시트)
   모든 페이지가 window.YAYU 로 접근합니다.
   ===================================================================== */
window.YAYU = (function () {
  /* ---------- 행사 개요 ---------- */
  const event = {
    title: "2026 퍼스트전산 여름 야유회",
    company: "퍼스트전산",
    vendor: "원수상레저",
    place: "강원 춘천시 남면 박암관천길 93-54",
    startDate: "2026-08-29", // 토
    endDate: "2026-08-30",   // 일
    dateLabel: "2026년 08월 29일(토) ~ 08월 30일(일)",
    nights: "1박 2일",
    writtenOn: "2026.06.30",
    perks: ["숙식 제공", "차량 제공", "연차 1일 제공"],
    headcount: 49,     // 참석 확정 인원
    busCount: 45,      // 버스 승차 인원
    joinSeparately: 4, // 따로 합류 인원
  };

  /* ---------- 비상연락망(스탭) ---------- */
  const staff = [
    { name: "이의수", role: "스탭(정)", phone: "010-6506-0632" },
    { name: "현호진", role: "스탭(정)", phone: "010-9601-5512" },
    { name: "안수복", role: "스탭(부)", phone: "010-6728-1095" },
    { name: "김정원", role: "스탭(부)", phone: "010-5936-8902" },
  ];

  /* ---------- 일정표 (야유회 일정표 시트) ---------- */
  const schedule = [
    {
      day: "8월 29일 (토)",
      short: "DAY 1",
      rows: [
        { time: "07:30~08:00", dur: "30분", act: "회사집결 / 준비 및 출발", note: "8시 출발, 7:30까지 집결" },
        { time: "08:00~09:30", dur: "1시간 30분", act: "빠지 도착", note: "" },
        { time: "09:30~10:00", dur: "30분", act: "짐 정리 / 물놀이 옷 환복", note: "" },
        { time: "10:00~12:00", dur: "2시간", act: "물놀이", note: "" },
        { time: "12:00~13:00", dur: "1시간", act: "점심 식사", note: "" },
        { time: "13:00~18:00", dur: "5시간", act: "물놀이", note: "" },
        { time: "18:00~19:00", dur: "1시간", act: "샤워 및 재정비", note: "편한 옷으로 환복" },
        { time: "19:00~21:00", dur: "2시간", act: "저녁식사 / 레크레이션", note: "시작 전 단체 사진촬영" },
        { time: "21:00~", dur: "—", act: "자유시간 및 취침", note: "" },
      ],
    },
    {
      day: "8월 30일 (일)",
      short: "DAY 2",
      rows: [
        { time: "10:00~11:00", dur: "1시간", act: "세면 및 퇴실준비", note: "11시 퇴실" },
        { time: "11:00~11:30", dur: "30분", act: "식사 장소 이동", note: "인근 식당 단체예약" },
        { time: "11:30~12:30", dur: "1시간", act: "아점 식사", note: "" },
        { time: "12:30~14:30", dur: "2시간", act: "회사 출발 및 도착", note: "" },
        { time: "14:30~", dur: "—", act: "귀가", note: "" },
      ],
    },
  ];

  /* ---------- 참석자 (찐 참석자만 시트) ----------
     bus=false → 버스 미승차(따로 합류), note → 특이사항          */
  const attendees = [
    // 임원
    { dept: "임원", name: "김희권", rank: "대표이사", bus: true, attend: true, note: "", photo: "1_1779171719976.png" },
    { dept: "임원", name: "이효영", rank: "실장", bus: true, attend: true, note: "", photo: "2_1779171721913.png" },
    { dept: "임원", name: "장경수", rank: "이사", bus: true, attend: true, note: "", photo: "" },
    // 대표님 지인
    { dept: "대표님 지인", name: "김광호", rank: "대표", bus: true, attend: true, note: "", photo: "" },
    { dept: "대표님 지인", name: "구자혁", rank: "대표", bus: true, attend: true, note: "", photo: "" },
    // CS
    { dept: "CS", name: "박옥주", rank: "파트장", bus: true, attend: true, note: "", photo: "3_1779171723306.png" },
    { dept: "CS", name: "신정훈", rank: "팀장", bus: true, attend: true, note: "따로 합류", photo: "5_1779171725733.png" },
    // CS_A
    { dept: "CS_A", name: "김정민", rank: "부파트장", bus: true, attend: true, note: "", photo: "14_1779171741551.png" },
    { dept: "CS_A", name: "정웅", rank: "프로", bus: true, attend: true, note: "", photo: "37_1779171765315.png" },
    // CS_B
    { dept: "CS_B", name: "윤기준", rank: "프로", bus: true, attend: true, note: "", photo: "11_1779171735437.png" },
    { dept: "CS_B", name: "권태혁", rank: "프로", bus: true, attend: true, note: "", photo: "15_1779171740407.png" },
    { dept: "CS_B", name: "조윤", rank: "프로", bus: true, attend: true, note: "", photo: "27_1779171754596.png" },
    // CS_C
    { dept: "CS_C", name: "이홍진", rank: "부파트장", bus: true, attend: true, note: "귀가 날 따로 출발", photo: "12_1779171736556.png" },
    { dept: "CS_C", name: "이민구", rank: "프로", bus: true, attend: true, note: "", photo: "33_1779171762075.png" },
    { dept: "CS_C", name: "한왕주", rank: "프로", bus: true, attend: true, note: "", photo: "38_1779171772505.png" },
    { dept: "CS_C", name: "박영현", rank: "프로", bus: false, attend: true, note: "육아로 따로 합류", photo: "26_1779171753538.png" },
    // CS_D
    { dept: "CS_D", name: "양승원", rank: "부파트장", bus: true, attend: true, note: "", photo: "18_1779171743718.png" },
    { dept: "CS_D", name: "이호준", rank: "프로", bus: true, attend: true, note: "", photo: "" },
    // CS_S
    { dept: "CS_S", name: "안수복", rank: "부파트장", bus: true, attend: true, note: "", photo: "23_1779171749649.png" },
    { dept: "CS_S", name: "정지훈", rank: "프로", bus: true, attend: true, note: "", photo: "31_1779171764424.png" },
    { dept: "CS_S", name: "이혁주", rank: "프로", bus: true, attend: true, note: "", photo: "132_1779171781023.png" },
    // 전략영업
    { dept: "전략영업", name: "홍대경", rank: "팀장", bus: true, attend: true, note: "", photo: "6_1779171727065.png" },
    { dept: "전략영업", name: "박진영", rank: "파트장", bus: true, attend: true, note: "", photo: "13_1779171739268.png" },
    { dept: "전략영업", name: "이찬우", rank: "프로", bus: true, attend: true, note: "", photo: "10_1779171734316.png" },
    { dept: "전략영업", name: "박민", rank: "프로", bus: true, attend: true, note: "", photo: "29_1779171760832.png" },
    { dept: "전략영업", name: "김수인", rank: "프로", bus: true, attend: true, note: "", photo: "24_1779171751037.png" },
    { dept: "전략영업", name: "이정현", rank: "프로", bus: false, attend: true, note: "3시 합류", photo: "40_1779171771394.png" },
    // 운영지원
    { dept: "운영지원", name: "이의수", rank: "파트장", bus: true, attend: true, note: "", photo: "7_1779171728373.png" },
    { dept: "운영지원", name: "현호진", rank: "부파트장", bus: true, attend: true, note: "", photo: "25_1779171752059.png" },
    { dept: "운영지원", name: "김정원", rank: "프로", bus: true, attend: true, note: "", photo: "34_1779171755919.png" },
    { dept: "운영지원", name: "김현군", rank: "프로", bus: true, attend: true, note: "", photo: "21_1779171748522.png" },
    { dept: "운영지원", name: "백진성", rank: "프로", bus: true, attend: true, note: "", photo: "44_1779171774581.png" },
    { dept: "운영지원", name: "허영재", rank: "프로", bus: true, attend: true, note: "", photo: "8_1779171729531.png" },
    { dept: "운영지원", name: "윤태학", rank: "프로", bus: true, attend: true, note: "", photo: "20_1779171745907.png" },
    // 운영지원팀
    { dept: "운영지원팀", name: "육근덕", rank: "프로", bus: true, attend: true, note: "", photo: "" },
    { dept: "운영지원팀", name: "김흥태", rank: "프로", bus: true, attend: true, note: "", photo: "" },
    // 경영지원
    { dept: "경영지원", name: "김숙영", rank: "파트장", bus: true, attend: true, note: "", photo: "9_1779171730719.png" },
    { dept: "경영지원", name: "이윤아", rank: "프로", bus: false, attend: true, note: "육아로 따로 합류", photo: "30_1779171737848.png" },
    { dept: "경영지원", name: "김슬기", rank: "프로", bus: false, attend: true, note: "육아로 따로 합류", photo: "42_1779171769434.png" },
    { dept: "경영지원", name: "박지은", rank: "프로", bus: true, attend: true, note: "", photo: "17_1779171747195.png" },
    { dept: "경영지원", name: "최영지", rank: "프로", bus: true, attend: true, note: "", photo: "" },
    // IT
    { dept: "IT", name: "손영근", rank: "파트장", bus: true, attend: true, note: "", photo: "4_1779171724398.png" },
    { dept: "IT", name: "김정식", rank: "부파트장", bus: true, attend: true, note: "", photo: "22_1779171775880.png" },
    { dept: "IT", name: "문종주", rank: "프로", bus: true, attend: true, note: "토요일만", photo: "19_1779171744808.png" },
    { dept: "IT", name: "김광태", rank: "프로", bus: true, attend: true, note: "", photo: "39_1779171767109.png" },
    { dept: "IT", name: "김기준", rank: "프로", bus: true, attend: true, note: "", photo: "35_1779171757219.png" },
    { dept: "IT", name: "지경민", rank: "프로", bus: true, attend: true, note: "", photo: "" },
    { dept: "IT", name: "김담우", rank: "프로", bus: true, attend: true, note: "", photo: "43_1779171773343.png" },
    { dept: "IT", name: "신동원", rank: "프로", bus: true, attend: true, note: "", photo: "128_1779171776941.png" },
    // ── 미참석 (원본 참석자 시트의 불참자) ──
    { dept: "CS_A", name: "심태현", rank: "프로", bus: false, attend: false, note: "여행", photo: "28_1779171759783.png" },
    { dept: "CS_D", name: "김종희", rank: "프로", bus: false, attend: false, note: "간병", photo: "32_1779171763470.png" },
    { dept: "전략영업", name: "유성용", rank: "프로", bus: false, attend: false, note: "공연", photo: "" },
    { dept: "경영지원", name: "박수민", rank: "프로", bus: false, attend: false, note: "건강으로 휴식", photo: "41_1779171768186.png" },
    { dept: "경영지원", name: "이보배", rank: "프로", bus: false, attend: false, note: "자녀", photo: "129_1779171779856.png" },
    { dept: "경영지원", name: "안경미", rank: "프로", bus: false, attend: false, note: "자녀", photo: "130_1779171778419.png" },
    { dept: "경영지원", name: "성하영", rank: "프로", bus: false, attend: false, note: "알바", photo: "" },
    { dept: "경영지원", name: "이제일나", rank: "프로", bus: false, attend: false, note: "알바", photo: "" },
    { dept: "경영지원", name: "조소은", rank: "프로", bus: false, attend: false, note: "알바", photo: "" },
    { dept: "경영지원", name: "김소향", rank: "프로", bus: false, attend: false, note: "자녀", photo: "109_1779171742614.png" },
  ];

  // 부서 표시 순서
  const deptOrder = ["임원", "대표님 지인", "CS", "CS_A", "CS_B", "CS_C", "CS_D", "CS_S", "전략영업", "운영지원", "운영지원팀", "경영지원", "IT"];

  /* ---------- 예산 (견적체크 시트) ---------- */
  const budget = {
    total: 24500000, // 총 예산 2,450만
    items: [
      { name: "숙소·빠지 대관", vendor: "원수상레저", detail: "숙식 제공", amount: 15000000, cat: "대관" },
      { name: "전세버스", vendor: "이만우 기사님", detail: "차량 제공", amount: 850000, cat: "교통" },
      { name: "아침 식사", vendor: "상봉 24시 김밥천국", detail: "김밥 49개", amount: 196000, cat: "식사" },
      { name: "점심 식사", vendor: "한솥도시락", detail: "진달래 49 · 육개장 49", amount: 534100, cat: "식사" },
      { name: "조식(닭갈비)", vendor: "옹장골닭갈비", detail: "단체 식사", amount: 1323000, cat: "식사" },
      { name: "주류·음료", vendor: "마트", detail: "소주 · 맥주 · 음료수", amount: 221000, cat: "식사" },
      { name: "여행자 보험", vendor: "트래블로버", detail: "국내 여행자 1일 보험", amount: 183960, cat: "안전" },
      { name: "행사 경품", vendor: "-", detail: "총 100만원 상당 경품", amount: 1500000, cat: "경품" },
    ],
  };

  /* ---------- 회사 준비물 체크리스트 ----------
     퍼스트전산에서 직접 챙겨 가는 물품 (개인 준비물은 일정표 포스터 참고) */
  const checklist = {
    company: {
      title: "회사 준비물",
      items: [
        { name: "소주", detail: "" },
        { name: "맥주", detail: "" },
        { name: "음료수", detail: "생수 · 탄산 · 주스 등" },
        { name: "얼음 · 아이스박스", detail: "음료 보관용" },
        { name: "종이컵 · 일회용 식기", detail: "" },
        { name: "경품", detail: "팀 / 개인 게임 상품" },
        { name: "구급약", detail: "비상약 · 밴드" },
      ],
      note: "행사 당일 회사에서 직접 챙겨 가는 물품입니다. 필요한 것을 자유롭게 추가하세요.",
    },
  };

  /* ---------- 참여 혜택 / 레크레이션 ---------- */
  const perks = [
    { name: "연차 제공", detail: "1일 연차 제공 (정직원만 제공)" },
    { name: "경품 (팀/개인)", detail: "총 100만원 상당 · 팀게임/개인게임/개인번호 로또뽑기" },
    { name: "여행자 보험", detail: "국내 여행자 1일 보험 + 액티비티 자체 보험 별도 진행" },
  ];

  const recreation = [
    { part: "1부", items: ["대표님 말씀", "스피드퀴즈 · 스무고개 (개인전 → 개인보상)", "장기자랑 (사전 신청)"] },
    { part: "2부", items: ["4글자 이어 말하기 (팀전 → 팀보상)", "고요 속의 외침 · 일심동체 텔레파시"] },
  ];

  /* ---------- 공용 유틸 ---------- */
  function won(n) {
    return "₩" + Number(n).toLocaleString("ko-KR");
  }
  function man(n) {
    return (n / 10000).toLocaleString("ko-KR") + "만";
  }

  return {
    event, staff, schedule, attendees, deptOrder,
    budget, checklist, perks, recreation, won, man,
  };
})();
