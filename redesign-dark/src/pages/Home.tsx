import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { Link } from 'react-router-dom';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { getFeaturedProjects, type PortfolioViewProject } from '../data/portfolioContent';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { db, type PortfolioProject } from '../utils/firebase';

const skillGroups = [
  {
    title: 'Backend',
    stack: 'Python · FastAPI · SQLAlchemy · PostgreSQL',
    evidence: '행정 자동화 API, ScanoX 분석 서비스',
  },
  {
    title: 'Automation',
    stack: 'Selenium · HTTP Client · Workflow State Management',
    evidence: '다단계 인증, 기관별 서류 발급 자동화',
  },
  {
    title: 'Frontend',
    stack: 'React · TypeScript · HTML/CSS · Tailwind CSS · Firebase SDK',
    evidence: '반응형 웹 UI, React Router 화면 구성, Hooks·Context API 상태 관리',
  },
  {
    title: 'Testing',
    stack: 'API Response Validation · Browser Scenario Testing · Error Reproduction',
    evidence: '자동화 단계와 사용자 흐름을 기준으로 기능 및 실패 상황 확인',
  },
  {
    title: 'Tools & DevOps',
    stack: 'Git · GitHub · Docker Compose · Linux · AWS EC2 · Proxmox',
    evidence: 'Git 기반 변경 관리, 컨테이너 배포, 서비스 격리와 개인용 서버 운영',
  },
];

const Home = () => {
  const [selectedProjects, setSelectedProjects] = useState<PortfolioViewProject[]>([]);
  const heroTraceRef = useRef<HTMLDivElement>(null);
  const projectButtonRef = useRef<HTMLAnchorElement>(null);

  const handleHeroPointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const trace = heroTraceRef.current;
    if (!trace) return;

    trace.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`);
    trace.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`);
  };

  const handleMagneticPointerMove = (event: ReactPointerEvent<HTMLSpanElement>) => {
    if (event.pointerType !== 'mouse') return;
    const button = projectButtonRef.current;
    if (!button) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = Math.max(-8, Math.min(8, (event.clientX - bounds.left - bounds.width / 2) * 0.16));
    const offsetY = Math.max(-6, Math.min(6, (event.clientY - bounds.top - bounds.height / 2) * 0.2));
    button.style.setProperty('--magnetic-x', `${offsetX}px`);
    button.style.setProperty('--magnetic-y', `${offsetY}px`);
  };

  const resetMagneticButton = () => {
    projectButtonRef.current?.style.setProperty('--magnetic-x', '0px');
    projectButtonRef.current?.style.setProperty('--magnetic-y', '0px');
  };

  usePageMetadata({
    title: '이민규 | 백엔드 중심 웹 개발자',
    description: 'Python·FastAPI 기반 업무 자동화 API와 운영 가능한 웹 서비스를 만드는 개발자 이민규의 포트폴리오입니다.',
  });

  useEffect(() => onSnapshot(
    query(
      collection(db, 'portfolioProjects'),
      where('isPrivate', '==', false),
    ),
    (snapshot) => {
      const remoteProjects = snapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      })) as PortfolioProject[];
      setSelectedProjects(getFeaturedProjects(remoteProjects));
    },
    (snapshotError) => {
      console.error('대표 프로젝트 조회 오류:', snapshotError);
    },
  ), []);

  return (
    <div className="site-page">
      <section className="home-hero" onPointerMove={handleHeroPointerMove}>
        <div className="hero-trace" ref={heroTraceRef} aria-hidden="true">
          <span className="hero-trace__pixels" />
          <span className="hero-trace__glow" />
        </div>
        <div className="site-container home-hero__inner">
          <div className="home-hero__copy">
            <p className="eyebrow">ABOUT ME</p>
            <h1>업무 자동화와 운영 가능한 API를 만드는 웹 개발자 이민규입니다.</h1>
            <p className="home-hero__lead">
              Python·FastAPI 백엔드와 Selenium 자동화가 중심이며, 서비스에 필요한 React UI와 배포 환경까지 직접 연결합니다.
            </p>
            <div className="hero-proof" aria-label="핵심 경험">
              <span>공공기관 업무 자동화</span>
              <span>AI 서비스 백엔드 연동</span>
              <span>Docker 기반 운영</span>
            </div>
            <div className="button-row">
              <span
                className="magnetic-button-zone"
                onPointerMove={handleMagneticPointerMove}
                onPointerLeave={resetMagneticButton}
              >
                <Link ref={projectButtonRef} className="button button--primary magnetic-button" to="/portfolio">프로젝트 보기</Link>
              </span>
              <a className="button button--secondary-on-dark" href="mailto:vavfapi032@naver.com">이메일 보내기</a>
            </div>
          </div>
          <figure className="home-portrait">
            <img
              src="/picture/profile-optimized.webp"
              alt="웹 개발자 이민규"
              width="640"
              height="800"
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>

      <section className="section section--paper" aria-labelledby="featured-heading">
        <div className="site-container">
          <div className="section-heading section-heading--experience">
            <p className="eyebrow">FEATURED PROJECTS</p>
            <h2 id="featured-heading">Featured Projects</h2>
            <p>기능 목록보다 해결한 문제와 맡은 범위를 먼저 보여드립니다.</p>
          </div>
          <div className="featured-grid">
            {selectedProjects.map((project, index) => (
              <Link className="featured-case" to={`/portfolio/${project.id}`} key={project.id}>
                <span className="featured-case__number">0{index + 1}</span>
                <span className="featured-case__label">{project.label}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <dl>
                  {project.role && <div>
                    <dt>내 역할</dt>
                    <dd>{project.role}</dd>
                  </div>}
                  {project.technologies.length > 0 && <div>
                    <dt>핵심 기술</dt>
                    <dd>{project.technologies.slice(0, 4).join(' · ')}</dd>
                  </div>}
                </dl>
                <span className="text-link">사례 자세히 보기 <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="skills-heading">
        <div className="site-container split-intro">
          <div className="section-heading section-heading--left">
            <p className="eyebrow">SKILLS</p>
            <h2 id="skills-heading">Skills</h2>
            <p>기술 이름만 나열하지 않고 어떤 문제에 적용했는지 함께 정리했습니다.</p>
          </div>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <article
                className="skill-group"
                key={group.title}
                tabIndex={0}
                aria-label={`${group.title} 적용 경험`}
              >
                <h3>{group.title}</h3>
                <p className="skill-group__stack">{group.stack}</p>
                <p className="skill-group__evidence">{group.evidence}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
