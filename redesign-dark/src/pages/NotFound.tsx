import { Link, useLocation } from 'react-router-dom';
import { usePageMetadata } from '../hooks/usePageMetadata';

const NotFound = () => {
  const { pathname } = useLocation();

  usePageMetadata({
    title: '페이지를 찾을 수 없습니다',
    description: '요청한 포트폴리오 페이지를 찾을 수 없습니다.',
    path: pathname,
    noIndex: true,
  });

  return (
    <div className="page-shell">
      <section className="empty-state not-found site-container" aria-labelledby="not-found-title">
        <p className="eyebrow">404 NOT FOUND</p>
        <h1 id="not-found-title">페이지를 찾을 수 없습니다.</h1>
        <p>주소가 변경되었거나 존재하지 않는 페이지입니다.</p>
        <div className="button-row">
          <Link className="button button--primary" to="/">소개로 이동</Link>
          <Link className="button button--secondary-on-dark" to="/portfolio">프로젝트 보기</Link>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
