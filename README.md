# Portfolio

백엔드 중심 웹 개발자 이민규의 포트폴리오 사이트입니다.

Python·FastAPI 기반 업무 자동화, AI 서비스 백엔드 연동, Docker 운영 경험을 프로젝트 사례 중심으로 소개합니다.

**Live:** [mkllel.github.io](https://mkllel.github.io/)

## Tech Stack

- **Framework:** React 19 + TypeScript + Vite 6 (SWC)
- **Styling:** Tailwind CSS 3 + CSS custom properties
- **Routing:** React Router 7
- **Data / Auth:** Firebase Authentication + Cloud Firestore + Cloud Storage
- **Content:** React Markdown + remark-gfm
- **Theme:** 라이트·다크 모드 (`data-theme`, localStorage 기반)
- **Icons:** Lucide React
- **Fonts:** Pretendard Variable + NanumSquare (local)
- **Deploy:** GitHub Pages (`gh-pages`)
- **Quality:** ESLint + TypeScript

런타임 의존성은 7개입니다: `react`, `react-dom`, `react-router-dom`, `firebase`, `react-markdown`, `remark-gfm`, `lucide-react`.

## Getting Started

현재 리디자인 소스는 `redesign-dark` 디렉터리에 있습니다.

최상위의 `src`, `public`, `package.json`과 설정 파일은 이전 버전용으로 남겨 둔 자료입니다.
현재 사이트의 개발·검사·배포 및 Firebase 규칙 관리는 모두 `redesign-dark`에서 진행합니다.
Firebase 규칙은 이 폴더의 `firebase.json`이 지정한 `firestore.rules`와 `storage.rules`를 기준으로 사용합니다.
최상위의 이전 규칙이나 과거 안내 파일을 운영 환경에 적용하지 마세요.

```bash
cd redesign-dark
npm install
npm run dev
```

개발 서버는 기본적으로 [http://localhost:5173](http://localhost:5173)에서 실행됩니다.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Vite 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 생성 |
| `npm run preview` | 프로덕션 빌드 로컬 미리보기 |
| `npm run lint` | ESLint 검사 |
| `npm run deploy` | 빌드 후 GitHub Pages 배포 |

## Project Structure

```text
redesign-dark/
  src/
    components/
      admin/             # 관리자 폼, 목록, 주요 프로젝트 순서 관리
      Header.tsx         # 테마 전환, 스크롤 진행 표시, 주요 메뉴
      Footer.tsx
      PortfolioCard.tsx
      ProtectedRoute.tsx
    pages/
      Home.tsx           # About Me, Skills, Featured Projects
      Portfolio.tsx      # 프로젝트 목록과 필터
      PortfolioDetail.tsx
      Blog.tsx
      BlogDetail.tsx
      Login.tsx
      Admin.tsx
    data/                # 정적 폴백 콘텐츠
    hooks/               # 페이지별 메타데이터 처리
    utils/               # Firebase, 검색, 날짜 유틸리티
    App.css              # 디자인 토큰, 레이아웃, 반응형 스타일
  public/
    fonts/               # Pretendard, NanumSquare 로컬 폰트
    picture/             # 프로필 및 Open Graph 이미지
    404.html             # GitHub Pages SPA 경로 복구
    robots.txt
    sitemap.xml
  firestore.rules
  firestore.indexes.json
  storage.rules
```

## Features

- About Me, Skills, Featured Projects 중심의 채용용 메인 화면
- 라이트·다크 테마와 사용자 선택 저장
- 카테고리·기술 기준 프로젝트 필터
- Markdown 기반 프로젝트·기술 기록 상세 페이지
- 여러 썸네일과 프로젝트 링크·PDF 자료 표시
- Firebase 이메일·비밀번호 및 Google 관리자 로그인
- 포트폴리오·블로그 콘텐츠 등록, 수정, 삭제
- 프로젝트 공개·비공개 설정과 주요 프로젝트 순서 관리
- 관리자 작성 화면의 기본 미리보기와 상세 페이지형 미리보기
- 데스크톱·태블릿·모바일 반응형 레이아웃
- 페이지별 메타데이터, Open Graph, JSON-LD, sitemap, robots.txt
- GitHub Pages 직접 경로 접근을 위한 SPA fallback

## Deployment

```bash
cd redesign-dark
npm run deploy
```

`vite build`로 생성한 `dist`를 `gh-pages` 브랜치에 게시합니다. GitHub Pages는 해당 브랜치의 루트 디렉터리를 서비스합니다.

빌드 결과는 `main` 브랜치에서 추적하지 않습니다. `dist` 내용을 저장소 최상위로 복사하지 마세요.

## License

All rights reserved.
