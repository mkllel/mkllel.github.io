import { useEffect, useMemo, useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import PortfolioCard from '../components/PortfolioCard';
import { getCuratedProjects, type PortfolioViewProject } from '../data/portfolioContent';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { db, type PortfolioProject } from '../utils/firebase';

type FilterType = 'category' | 'technology';

const Portfolio = () => {
  const [projects, setProjects] = useState<PortfolioViewProject[]>([]);
  const [filterType, setFilterType] = useState<FilterType>('category');
  const [activeFilter, setActiveFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  usePageMetadata({
    title: '프로젝트',
    description: '업무 자동화, AI 서비스 백엔드, Docker 운영 환경을 문제·역할·설계·검증 순서로 정리한 이민규의 프로젝트입니다.',
    path: '/portfolio',
  });

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, 'portfolioProjects'),
        where('isPrivate', '==', false),
      ),
      (snapshot) => {
        const remoteProjects = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        })) as PortfolioProject[];
        setProjects(getCuratedProjects(remoteProjects));
        setLoading(false);
      },
      (snapshotError) => {
        console.error('포트폴리오 목록 조회 오류:', snapshotError);
        setProjects(getCuratedProjects([]));
        setError('일부 원격 이미지를 불러오지 못해 텍스트 중심으로 표시합니다.');
        setLoading(false);
      },
    );
    return unsubscribe;
  }, []);

  const categories = useMemo(
    () => Array.from(new Set(projects.map((project) => project.category).filter(Boolean))) as string[],
    [projects],
  );
  const technologies = useMemo(
    () => Array.from(new Set(projects.flatMap((project) => project.technologies))),
    [projects],
  );
  const options = filterType === 'category' ? categories : technologies;
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((project) => filterType === 'category'
      ? project.category === activeFilter
      : project.technologies.includes(activeFilter));

  const selectFilterType = (type: FilterType) => {
    setFilterType(type);
    setActiveFilter('all');
  };

  return (
    <div className="page-shell">
      <header className="page-intro site-container">
        <p className="eyebrow">PROJECT CASE STUDIES</p>
        <h1>프로젝트</h1>
        <p>구현한 기능보다 문제, 제약, 담당 범위와 운영 관점의 해결 과정을 중심으로 정리했습니다.</p>
      </header>

      <section className="site-container project-browser" aria-label="프로젝트 목록">
        <div className="filter-toolbar">
          <div className="segmented-control" aria-label="필터 기준">
            <button className={filterType === 'category' ? 'is-active' : ''} onClick={() => selectFilterType('category')}>카테고리</button>
            <button className={filterType === 'technology' ? 'is-active' : ''} onClick={() => selectFilterType('technology')}>기술</button>
          </div>
          <div className="filter-options" aria-label={filterType === 'category' ? '카테고리 선택' : '기술 선택'}>
            <button className={activeFilter === 'all' ? 'is-active' : ''} onClick={() => setActiveFilter('all')}>전체 프로젝트</button>
            {options.map((option) => (
              <button key={option} className={activeFilter === option ? 'is-active' : ''} onClick={() => setActiveFilter(option)}>{option}</button>
            ))}
          </div>
        </div>

        {loading && <div className="status-message"><span className="loading-dot" />프로젝트를 불러오는 중입니다.</div>}
        {error && <p className="inline-notice">{error}</p>}
        {!loading && (
          <div className="project-grid">
            {filteredProjects.map((project) => <PortfolioCard key={project.id} project={project} />)}
          </div>
        )}
        {!loading && filteredProjects.length === 0 && <p className="status-message">조건에 맞는 프로젝트가 없습니다.</p>}
      </section>
    </div>
  );
};

export default Portfolio;
