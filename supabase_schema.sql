-- =====================================================================
-- 2026 퍼스트전산 여름 야유회 — Supabase 스키마 + 초기 데이터
-- 참석자: 인사DB 기준(부서·직급·사진) · 참석/미참석(attend) 분류 포함
-- Supabase SQL Editor 에 붙여넣고 [Run].
-- =====================================================================

drop table if exists attendees, budget_items, schedule_items, checklist_items, settings cascade;

create table attendees (
  id uuid primary key default gen_random_uuid(),
  sort int default 0,
  dept text, name text, rank text,
  attend boolean default true,   -- 참석 여부(false=미참석)
  bus boolean default true, note text,
  photo text                     -- 인사DB 사진 파일명
);
create table budget_items (
  id uuid primary key default gen_random_uuid(),
  sort int default 0,
  name text, vendor text, detail text, amount numeric default 0, cat text
);
create table schedule_items (
  id uuid primary key default gen_random_uuid(),
  sort int default 0,
  day text, short text, "time" text, dur text, act text, note text
);
create table checklist_items (
  id uuid primary key default gen_random_uuid(),
  sort int default 0, grp text, name text, qty text, detail text
);
create table settings ( key text primary key, value jsonb );

-- 참석자 (참석 49명 + 미참석 10명)
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (0,'임원','김희권','대표이사',true,true,'','1_1779171719976.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (1,'임원','이효영','실장',true,true,'','2_1779171721913.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (2,'임원','장경수','이사',true,true,'','');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (3,'대표님 지인','김광호','대표',true,true,'','');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (4,'대표님 지인','구자혁','대표',true,true,'','');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (5,'CS','박옥주','파트장',true,true,'','3_1779171723306.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (6,'CS','신정훈','팀장',true,true,'따로 합류','5_1779171725733.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (7,'CS_A','김정민','부파트장',true,true,'','14_1779171741551.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (8,'CS_A','정웅','프로',true,true,'','37_1779171765315.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (9,'CS_B','윤기준','프로',true,true,'','11_1779171735437.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (10,'CS_B','권태혁','프로',true,true,'','15_1779171740407.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (11,'CS_B','조윤','프로',true,true,'','27_1779171754596.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (12,'CS_C','이홍진','부파트장',true,true,'귀가 날 따로 출발','12_1779171736556.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (13,'CS_C','이민구','프로',true,true,'','33_1779171762075.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (14,'CS_C','한왕주','프로',true,true,'','38_1779171772505.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (15,'CS_C','박영현','프로',true,false,'육아로 따로 합류','26_1779171753538.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (16,'CS_D','양승원','부파트장',true,true,'','18_1779171743718.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (17,'CS_D','이호준','프로',true,true,'','');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (18,'CS_S','안수복','부파트장',true,true,'','23_1779171749649.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (19,'CS_S','정지훈','프로',true,true,'','31_1779171764424.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (20,'CS_S','이혁주','프로',true,true,'','132_1779171781023.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (21,'전략영업','홍대경','팀장',true,true,'','6_1779171727065.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (22,'전략영업','박진영','파트장',true,true,'','13_1779171739268.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (23,'전략영업','이찬우','프로',true,true,'','10_1779171734316.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (24,'전략영업','박민','프로',true,true,'','29_1779171760832.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (25,'전략영업','김수인','프로',true,true,'','24_1779171751037.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (26,'전략영업','이정현','프로',true,false,'3시 합류','40_1779171771394.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (27,'운영지원','이의수','파트장',true,true,'','7_1779171728373.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (28,'운영지원','현호진','부파트장',true,true,'','25_1779171752059.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (29,'운영지원','김정원','프로',true,true,'','34_1779171755919.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (30,'운영지원','김현군','프로',true,true,'','21_1779171748522.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (31,'운영지원','백진성','프로',true,true,'','44_1779171774581.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (32,'운영지원','허영재','프로',true,true,'','8_1779171729531.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (33,'운영지원','윤태학','프로',true,true,'','20_1779171745907.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (34,'운영지원팀','육근덕','프로',true,true,'','');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (35,'운영지원팀','김흥태','프로',true,true,'','');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (36,'경영지원','김숙영','파트장',true,true,'','9_1779171730719.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (37,'경영지원','이윤아','프로',true,false,'육아로 따로 합류','30_1779171737848.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (38,'경영지원','김슬기','프로',true,false,'육아로 따로 합류','42_1779171769434.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (39,'경영지원','박지은','프로',true,true,'','17_1779171747195.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (40,'경영지원','최영지','프로',true,true,'','');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (41,'IT','손영근','파트장',true,true,'','4_1779171724398.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (42,'IT','김정식','부파트장',true,true,'','22_1779171775880.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (43,'IT','문종주','프로',true,true,'토요일만','19_1779171744808.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (44,'IT','김광태','프로',true,true,'','39_1779171767109.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (45,'IT','김기준','프로',true,true,'','35_1779171757219.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (46,'IT','지경민','프로',true,true,'','');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (47,'IT','김담우','프로',true,true,'','43_1779171773343.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (48,'IT','신동원','프로',true,true,'','128_1779171776941.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (49,'CS_A','심태현','프로',false,false,'여행','28_1779171759783.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (50,'CS_D','김종희','프로',false,false,'간병','32_1779171763470.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (51,'전략영업','유성용','프로',false,false,'공연','');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (52,'경영지원','박수민','프로',false,false,'건강으로 휴식','41_1779171768186.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (53,'경영지원','이보배','프로',false,false,'자녀','129_1779171779856.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (54,'경영지원','안경미','프로',false,false,'자녀','130_1779171778419.png');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (55,'경영지원','성하영','프로',false,false,'알바','');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (56,'경영지원','이제일나','프로',false,false,'알바','');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (57,'경영지원','조소은','프로',false,false,'알바','');
insert into attendees (sort,dept,name,rank,attend,bus,note,photo) values (58,'경영지원','김소향','프로',false,false,'자녀','109_1779171742614.png');

-- 예산 항목
insert into budget_items (sort,name,vendor,detail,amount,cat) values (0,'숙소·빠지 대관','원수상레저','숙식 제공',15000000,'대관');
insert into budget_items (sort,name,vendor,detail,amount,cat) values (1,'전세버스','이만우 기사님','차량 제공',850000,'교통');
insert into budget_items (sort,name,vendor,detail,amount,cat) values (2,'아침 식사','상봉 24시 김밥천국','김밥 49개',196000,'식사');
insert into budget_items (sort,name,vendor,detail,amount,cat) values (3,'점심 식사','한솥도시락','진달래 49 · 육개장 49',534100,'식사');
insert into budget_items (sort,name,vendor,detail,amount,cat) values (4,'조식(닭갈비)','옹장골닭갈비','단체 식사',1323000,'식사');
insert into budget_items (sort,name,vendor,detail,amount,cat) values (5,'주류·음료','마트','소주 · 맥주 · 음료수',221000,'식사');
insert into budget_items (sort,name,vendor,detail,amount,cat) values (6,'여행자 보험','트래블로버','국내 여행자 1일 보험',183960,'안전');
insert into budget_items (sort,name,vendor,detail,amount,cat) values (7,'행사 경품','-','총 100만원 상당 경품',1500000,'경품');

-- 일정
insert into schedule_items (sort,day,short,"time",dur,act,note) values (0,'8월 29일 (토)','DAY 1','07:30~08:00','30분','회사집결 / 준비 및 출발','8시 출발, 7:30까지 집결');
insert into schedule_items (sort,day,short,"time",dur,act,note) values (1,'8월 29일 (토)','DAY 1','08:00~09:30','1시간 30분','빠지 도착','');
insert into schedule_items (sort,day,short,"time",dur,act,note) values (2,'8월 29일 (토)','DAY 1','09:30~10:00','30분','짐 정리 / 물놀이 옷 환복','');
insert into schedule_items (sort,day,short,"time",dur,act,note) values (3,'8월 29일 (토)','DAY 1','10:00~12:00','2시간','물놀이','');
insert into schedule_items (sort,day,short,"time",dur,act,note) values (4,'8월 29일 (토)','DAY 1','12:00~13:00','1시간','점심 식사','');
insert into schedule_items (sort,day,short,"time",dur,act,note) values (5,'8월 29일 (토)','DAY 1','13:00~18:00','5시간','물놀이','');
insert into schedule_items (sort,day,short,"time",dur,act,note) values (6,'8월 29일 (토)','DAY 1','18:00~19:00','1시간','샤워 및 재정비','편한 옷으로 환복');
insert into schedule_items (sort,day,short,"time",dur,act,note) values (7,'8월 29일 (토)','DAY 1','19:00~21:00','2시간','저녁식사 / 레크레이션','시작 전 단체 사진촬영');
insert into schedule_items (sort,day,short,"time",dur,act,note) values (8,'8월 29일 (토)','DAY 1','21:00~','—','자유시간 및 취침','');
insert into schedule_items (sort,day,short,"time",dur,act,note) values (9,'8월 30일 (일)','DAY 2','10:00~11:00','1시간','세면 및 퇴실준비','11시 퇴실');
insert into schedule_items (sort,day,short,"time",dur,act,note) values (10,'8월 30일 (일)','DAY 2','11:00~11:30','30분','식사 장소 이동','인근 식당 단체예약');
insert into schedule_items (sort,day,short,"time",dur,act,note) values (11,'8월 30일 (일)','DAY 2','11:30~12:30','1시간','아점 식사','');
insert into schedule_items (sort,day,short,"time",dur,act,note) values (12,'8월 30일 (일)','DAY 2','12:30~14:30','2시간','회사 출발 및 도착','');
insert into schedule_items (sort,day,short,"time",dur,act,note) values (13,'8월 30일 (일)','DAY 2','14:30~','—','귀가','');

-- 회사 준비물
insert into checklist_items (sort,grp,name,detail) values (0,'company','소주','');
insert into checklist_items (sort,grp,name,detail) values (1,'company','맥주','');
insert into checklist_items (sort,grp,name,detail) values (2,'company','음료수','생수 · 탄산 · 주스 등');
insert into checklist_items (sort,grp,name,detail) values (3,'company','얼음 · 아이스박스','음료 보관용');
insert into checklist_items (sort,grp,name,detail) values (4,'company','종이컵 · 일회용 식기','');
insert into checklist_items (sort,grp,name,detail) values (5,'company','경품','팀 / 개인 게임 상품');
insert into checklist_items (sort,grp,name,detail) values (6,'company','구급약','비상약 · 밴드');

-- 설정
insert into settings (key,value) values ('budget_total', '24500000'::jsonb);

-- RLS (주소를 아는 누구나 읽기/쓰기 — 사내 비공개 도구용)
alter table attendees enable row level security;
alter table budget_items enable row level security;
alter table schedule_items enable row level security;
alter table checklist_items enable row level security;
alter table settings enable row level security;
create policy "public all" on attendees       for all using (true) with check (true);
create policy "public all" on budget_items    for all using (true) with check (true);
create policy "public all" on schedule_items  for all using (true) with check (true);
create policy "public all" on checklist_items for all using (true) with check (true);
create policy "public all" on settings        for all using (true) with check (true);
