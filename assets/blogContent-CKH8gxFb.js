import{C as a}from"./portfolioContent---9RVXan.js";const i={"스크래핑이라고 부르기엔 좀 빡셌던 Selenium 자동화 프로젝트":{priority:1,featured:!0,relatedProjectId:a,relatedProjectTitle:"어린이집 B2B 행정 자동화 플랫폼",sequence:["API 요청 접수","인증 세션 생성","기관별 단계 실행","상태·오류 기록","파일 저장·응답"],appendix:`
## 운영 관점에서 정리한 설계 기준

단순한 페이지 수집이 아니라 인증 세션과 장시간 작업을 관리해야 했기 때문에, API 요청과 브라우저 작업을 분리해 상태를 추적했습니다.

- **세션 상태**: 인증 전, 인증 완료, 실행 중, 만료 상태를 구분해 다음 단계의 실행 가능 여부를 판단했습니다.
- **재시도와 타임아웃**: 외부 사이트 응답 지연과 명확한 업무 실패를 구분하려면 단계별 종료 조건과 재시도 상한이 필요합니다.
- **멱등성**: 같은 요청이 다시 들어올 수 있으므로 작업 식별자와 현재 상태를 확인해 중복 실행을 막는 기준이 필요합니다.
- **오류 코드**: 인증 실패, 입력 오류, 외부 사이트 변경, 다운로드 실패를 구분해야 대응 지점을 빠르게 좁힐 수 있습니다.

실제 운영 코드는 회사 자산이라 공개하지 않으며, 이 글에서는 제가 설계하고 구현한 작업 생명주기와 장애 대응 원칙만 설명합니다.
`},"GitHub Pages에서 React Router 새로고침 404 문제 해결하기":{priority:2,featured:!0,appendix:`
## 404 fallback의 실제 동작

GitHub Pages는 상세 경로에 대응하는 파일이 없으면 최초 HTTP 요청에 404를 응답합니다. 이 프로젝트의 방식은 그 응답 자체를 200으로 바꾸는 것이 아니라, **404.html에서 브라우저 주소를 query 형태로 옮긴 뒤 index.html에서 원래 SPA 경로를 복구**합니다.

예를 들어 \`/blog/post-id\` 요청은 다음 흐름으로 처리됩니다.

\`/blog/post-id\` → \`/?/blog/post-id\` → React 실행 → \`/blog/post-id\` 복원

\`public/404.html\`의 핵심 코드는 다음과 같습니다.

\`\`\`html
<script>
  location.replace('/?/' + location.pathname.slice(1));
<\/script>
\`\`\`

## 대안 비교

- **현재 fallback 유지**: GitHub Pages와 React SPA를 그대로 유지할 때 가장 작은 변경입니다. 사용자는 화면을 볼 수 있지만 최초 HTTP 상태와 크롤러 SEO에는 한계가 있습니다.
- **HashRouter**: 서버 404는 피할 수 있지만 URL에 \`#\`이 포함되고 공유 주소의 품질이 낮아집니다.
- **정적 생성 또는 prerender**: 각 상세 URL에 실제 HTML을 제공해 SEO와 초기 응답을 개선하지만, Firebase 동적 콘텐츠를 빌드 시점에 가져오는 별도 파이프라인이 필요합니다.

현재 규모에서는 fallback을 유지하면서 title, description, canonical, sitemap을 보완했습니다. 따라서 이 글의 해결 범위는 '최초 HTTP 404 제거'가 아니라 **사용자 브라우저에서 상세 route 복구**입니다.
`},"내가 백엔드 서버로 FastAPI를 고집하는 이유":{priority:3,relatedProjectId:a,relatedProjectTitle:"어린이집 B2B 행정 자동화 플랫폼",appendix:`
## 실제 I/O 흐름에서의 선택 기준

자동화 API는 요청 검증, DB 조회, 외부 HTTP 통신, 작업 상태 저장처럼 I/O 대기가 많은 흐름이었습니다. 이 구간에서는 \`async\`를 사용해 대기 중인 요청이 다른 요청의 진행을 막지 않도록 구성할 수 있었습니다.

다만 CPU를 오래 사용하는 이미지 분석이나 모델 추론은 \`async\`만으로 빨라지지 않습니다. 이런 작업은 별도 프로세스나 작업 큐로 분리하고, API는 접수와 상태 조회를 담당하는 편이 적합합니다.

- **Pydantic validation**: 기관별 요청 필드와 허용 값을 API 경계에서 검증합니다.
- **Dependency Injection**: DB 세션, 인증 사용자, 외부 클라이언트의 생성과 정리를 endpoint에서 분리합니다.
- **BackgroundTasks**: 짧고 실패 복구가 단순한 후처리에 사용합니다.
- **작업 큐**: 재시도, 지연 실행, 작업 추적이 필요한 장시간 자동화에 사용합니다.

FastAPI를 선택한 이유는 유행이나 문법의 간결함만이 아니라, 이 I/O 중심 흐름과 타입 기반 API 계약을 함께 다루기 좋았기 때문입니다.
`},"1년 만의 포트폴리오 리뉴얼: React + TypeScript + Firebase 도입기":{priority:4,appendix:`
## 배포 구조에서 배운 점

페이지 단위 lazy loading으로 화면 코드를 나눴고, Firebase 콘텐츠는 런타임에 불러오도록 구성했습니다. GitHub Pages에는 서버 라우팅 설정이 없으므로 404 fallback을 별도로 유지합니다.

성능 수치는 동일한 조건에서 측정한 전후 데이터가 없어 개선 결과로 주장하지 않습니다. 대신 큰 프로필 이미지를 별도 WebP로 줄이고, 이미지 크기와 lazy loading을 지정해 전송량과 레이아웃 이동을 줄였습니다.
`},"처음 써본 TypeScript: 시행착오부터 느낀 점까지":{priority:5,appendix:`
## 실제로 막았던 타입 문제

Firebase 날짜는 화면에서 항상 JavaScript \`Date\`로 들어오지 않았습니다. Firestore \`Timestamp\`, ISO 문자열, 숫자 형태를 하나의 타입으로 선언하고 type narrowing 후 정렬하도록 바꿨습니다.

\`\`\`ts
type ContentDate = Timestamp | Date | string | number | { seconds: number };

const seconds =
  value instanceof Timestamp ? value.seconds :
  value instanceof Date ? value.getTime() / 1000 :
  typeof value === 'string' ? Date.parse(value) / 1000 : 0;
\`\`\`

수정 폼에서는 \`Partial<PortfolioProject>\`를 사용하되 Firestore에 저장하기 전 \`undefined\` 필드를 제거해 선택 입력값 때문에 저장이 실패하는 문제도 방지했습니다.
`}},o=t=>t?Array.from(new Set(t.flatMap(e=>{const r=e.trim();return r.includes("#")?r.split("#"):r.split(",")}).map(e=>e.trim()).filter(Boolean))):[],s=t=>{const e=i[t.title],r=t.title==="내가 백엔드 서버로 FastAPI를 고집하는 이유"?t.content.replace(/["“”']?패스트에이피아이\s*야호[^\n]*\n?/u,""):t.content;return{priority:(e==null?void 0:e.priority)??99,featured:(e==null?void 0:e.featured)??!1,content:`${r}${(e==null?void 0:e.appendix)??""}`,tags:o(t.tags),sequence:e==null?void 0:e.sequence,...e!=null&&e.relatedProjectId&&e.relatedProjectTitle?{relatedProject:{id:e.relatedProjectId,title:e.relatedProjectTitle}}:{}}};export{s as g};
