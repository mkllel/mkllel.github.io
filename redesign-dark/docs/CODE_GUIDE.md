# 포트폴리오 코드 읽기 가이드

현재 앱은 `redesign-dark/`를 기준으로 읽는다. 저장소 최상위의 `src/`와 Firebase 규칙은 이전 버전 자료이고, `gongji-check/`는 별개 서비스다. 아래 내용은 현재 로컬 코드를 설명하며, 서버에 배포된 규칙까지 새로 확인했다는 뜻은 아니다.

## 1. 먼저 볼 파일

| 관심사 | 시작할 파일 | 맡은 역할 |
| --- | --- | --- |
| 페이지 구성 | `src/App.tsx`, `src/components/Layout.tsx` | 경로별 화면 연결, 지연 로딩, 공통 헤더/푸터 |
| 관리자 로그인 | `src/pages/AdminRoute.tsx`, `src/utils/firebaseAuth.ts` | 로그인 상태에 따라 Login/Admin 선택, 관리자 여부 조회 |
| 관리자 화면 연결 | `src/pages/Admin.tsx` | 선택한 글과 탭을 관리하고 생성/수정 함수를 폼에 전달 |
| 프로젝트 입력 | `src/components/admin/PortfolioForm.tsx` | 입력값, 파일 선택, 유효성 검사, 미리보기 |
| 목록 및 저장 상태 | `src/components/admin/hooks/useAdminData.ts` | 목록 실시간 구독, 로딩/성공/실패 표시, 저장 함수 호출 |
| 실제 저장 | `src/utils/firebaseAdmin.ts` | Firestore 문서 CRUD와 Storage 이미지 업로드 |
| 데이터 형태 | `src/utils/firebase.ts` | Firebase 초기화, `PortfolioProject` 등의 TypeScript 타입 |
| 공개 목록 | `src/pages/Home.tsx`, `src/pages/Portfolio.tsx`, `src/data/portfolioContent.ts` | 공개 글 구독, 대표 3개/전체 목록 정렬 및 표시용 가공 |
| 공개 상세 | `src/pages/PortfolioDetail.tsx`, `src/data/portfolioDetailContent.ts` | ID로 단건 조회, 오류 구분, Markdown 섹션 분리 |
| 상세 표시 | `src/components/ProjectArticle.tsx`, `ProjectMarkdown.tsx`, `ProjectImage.tsx` | 소개/본문/이미지/처리 흐름 표시, 이미지 최적화와 원본 연결 |
| 데이터 접근 권한 | `firestore.rules`, `storage.rules`, `firebase.json` | 클라이언트 화면과 별개로 Firebase 요청을 허용/거절 |

파일 이름의 `Admin`이 서버용 Admin SDK를 뜻하지는 않는다. 이 앱은 브라우저용 Firebase SDK로 요청하고, 서버 측 권한 판단은 Firebase 규칙이 담당한다.

## 2. 로그인과 권한은 다르다

```text
/admin 접속 → AdminRoute가 Firebase 로그인 상태 확인
  미로그인 → Login
  로그인 → isAdmin(uid) 확인 → 관리자라면 Admin
                              아니라면 로그아웃 후 Login
```

- Firebase Authentication은 로그인한 사용자를 식별한다. 로그인 성공만으로 관리자가 되는 것은 아니다.
- `isAdmin()`은 최초 관리자 UID 또는 `admins/{uid}` 문서 존재 여부로 화면의 진입을 판단한다. 같은 모듈이 살아 있는 동안 조회 결과를 캐시하므로 변경된 권한이 화면에 즉시 재조회되는 구조는 아니다.
- `useAdminAuth.ts`는 관리자 화면의 인증 상태와 로그아웃을 관리하고, `ProtectedRoute.tsx`는 블로그 경로를 감싼다.
- 화면에서 메뉴를 숨기거나 이동을 막는 것과 데이터 접근 허용은 별개다. Firestore/Storage 요청은 각각의 규칙을 통과해야 한다.
- 로컬 Firestore 규칙은 블로그를 관리자 전용으로, 포트폴리오는 `isPrivate == false`인 문서를 공개 읽기로 설정한다. Storage의 `/images/**`는 공개 읽기다. **글 비공개가 이미지 파일까지 비공개로 바꾸는 것은 아니다.** 두 서비스의 관리자 판정 조건도 완전히 같지는 않으므로 권한을 수정할 때는 각각 확인한다.

## 3. 프로젝트 저장이 화면에 반영되는 과정

```text
PortfolioForm 입력/검사
  → Admin.handleProjectSubmit에서 신규/수정 구분
  → useAdminData의 생성/수정 함수
  → firebaseAdmin에서 필요하면 대표 이미지 업로드
  → Firestore 문서 저장
  → Promise 성공 후 폼 초기화 및 목록 이동
  → onSnapshot이 저장된 목록 변경을 화면에 반영
```

저장 함수의 성공 여부와 목록 구독 알림은 별개다. 목록에 무언가 표시됐다는 사실만으로 쓰기 요청의 최종 성공을 판단하지 않는다.

- `onSnapshot`은 최초 데이터와 이후 변경을 받는다. 관리자 훅에서는 블로그/포트폴리오 두 구독이 각각 성공하거나 실패한 뒤 초기 로딩을 끝내고, 오류는 따로 표시한다.
- 화면을 떠날 때 구독을 해제한다. 관리자의 `isActive` 검사는 화면 종료 뒤 도착한 콜백의 상태 변경도 막는다.
- 생성/수정 실패는 `firebaseAdmin` → `useAdminData` → 폼으로 다시 전달된다. 이 경로에서 오류를 삼키면 폼이 저장 성공으로 오인해 닫히거나 초기화될 수 있다.
- `undefined`는 저장 대상에서 제외하지만 빈 문자열/빈 배열은 유지한다. 기존 값 유지와 필드 비우기를 구분하기 위해서다. Firestore 필드 자체를 지울 때는 `deleteField()`를 사용한다.
- 홈 대표 프로젝트는 공개/featured 조건을 만족하는 글 중 `featuredOrder` 우선, 같은 순위에서는 작성일 최신순으로 최대 3개를 표시한다. 전체 공개 목록은 작성일 최신순이다.

## 4. 이미지 종류와 저장 시점

| 종류 | 저장 방식과 주의점 |
| --- | --- |
| 대표 이미지 | 폼에서 선택한 파일을 글 저장 때 업로드하고 URL을 `imageUrl`에 저장. 새 파일과 새 URL을 전달하지 않으면 기존 URL 유지. 설명은 `imageCaption` |
| 갤러리 이미지 | `galleryImages`에 URL과 `alt` 저장. 입력한 설명을 화면 캡션에도 사용하며, 이 입력란은 파일 업로드 기능이 아님 |
| 본문 이미지 | 첨부 버튼에서 먼저 업로드하고 반환 URL을 Markdown에 삽입. 글 저장/취소와 별개로 업로드가 이미 끝날 수 있음 |

`uploadBlogContentImages()`는 이름과 달리 포트폴리오 본문 첨부에서도 사용한다. 새 글은 `temp-...` ID를 쓰며, 업로드 경로가 저장 후 자동으로 문서 ID 경로로 이동하지 않는다.

Storage 업로드와 Firestore 문서 저장은 하나의 원자적 트랜잭션이 아니다. 대표 이미지 저장 과정이 실패하면 참조를 확보한 새 파일의 삭제를 시도하지만 정리 실패 가능성도 있다. 글 삭제/대표 이미지 교체가 기존 Storage 파일을 자동 정리하는 구조도 아니다. 따라서 '오류가 났으니 업로드 파일도 반드시 없다'고 가정하면 안 된다.

화면의 최적화 WebP는 원본과 별개다. `ProjectImage`는 생성된 매핑이 없거나 최적화 파일 로딩이 실패하면 원본을 사용하고, 확대 보기는 원본 URL을 사용한다. 생성 방식은 [스크립트 안내](../scripts/README.md)를 참고한다.

## 5. 방문자 조회와 정적 HTML은 별개다

```text
브라우저 목록: Home/Portfolio → 공개 조건 onSnapshot → 정렬/카드 표시
브라우저 상세: PortfolioDetail → ID로 getDoc → 표시용 가공 → ProjectArticle
정적 HTML: 공개 데이터 동기화 → content/public-projects.json
           → 빌드 시 projectPages.tsx → ProjectArticle/PortfolioCard → dist
```

- 목록은 쿼리 단계에서 `isPrivate == false`로 제한한다. 비공개 데이터를 전부 가져온 다음 UI에서만 숨기는 방식이 아니다.
- 상세의 `getDoc`은 단건 조회다. 열린 상세가 다른 곳에서 수정됐다고 자동 갱신되는 구독은 아니며, 다시 조회해야 최신 내용이 반영된다. 경로 변경 후 늦게 도착한 이전 응답은 `active` 검사로 무시한다.
- 상세의 비공개/없음/권한 거절은 '찾을 수 없음', 통신 실패는 '불러오기 실패'로 구분한다. 실패를 빈 콘텐츠로 오인하지 않고 재시도할 수 있게 하기 위해서다.
- `portfolioDetailContent.ts`는 Markdown을 구문 트리로 읽어 같은 깊이의 제목만 섹션으로 나눈다. 표시용 제목 번호 정리는 저장 원문을 수정하지 않는다.
- `ProjectArticle`은 공개 상세와 정적 페이지가 함께 사용한다. 관리자 미리보기는 `PortfolioForm` 안의 별도 `DetailPagePreview`이며 표시용 데이터 가공 함수, Markdown 및 처리 흐름 컴포넌트를 공유한다. 전체 레이아웃이 하나의 컴포넌트는 아니므로 표시 구조를 바꿀 때 미리보기도 따로 확인한다.
- **Firebase 저장만으로 이미 배포된 HTML·사이트맵·링크 미리보기가 바뀌지는 않는다.** 이전 공개 글을 비공개/삭제하면 공개 데이터 동기화와 새 배포가 필요하고, 외부 캐시/검색 색인은 별도로 남을 수 있다.

`npm run build`는 저장된 공개 스냅샷으로 로컬 산출물만 만든다. `npm run deploy`는 공개 데이터 동기화와 썸네일 갱신을 거쳐 GitHub Pages에 게시한다. Firebase 규칙 배포는 별도 작업이므로 사이트 빌드/배포와 혼동하지 않는다.

## 6. 문제를 찾을 때의 순서

1. 저장 실패: 폼의 검사 메시지 → `onSubmit`의 Promise 실패 → `firebaseAdmin`의 업로드/문서 저장 단계 → Firebase 오류 코드와 해당 서비스 규칙 순서로 확인한다.
2. 내용이 예전 상태: 현재 보고 있는 것이 목록 구독인지, 단건 조회 상세인지, 배포된 정적 HTML/링크 미리보기인지 먼저 구분한다.
3. 이미지 문제: 대표/갤러리/본문 중 어떤 경로인지, 원본 URL인지 생성된 WebP인지 구분한 다음 요청 결과를 확인한다.

실제 문서/이미지를 변경하지 않고 저장 실패와 폼 입력 유지, 조회 오류, Markdown 표시를 확인하는 기존 테스트:

```sh
node --test tests/admin-save.test.mjs tests/portfolio-form.test.mjs tests/portfolio-loading.test.mjs tests/portfolio-markdown.test.mjs
```

이 테스트는 Firebase 응답 등을 대체한 로컬 검사이며 실제 서비스 권한이나 브라우저 전체 흐름의 검증을 대신하지 않는다. 추가 검사 범위와 에뮬레이터 사용은 [테스트 안내](../tests/README.md)를 따른다.
