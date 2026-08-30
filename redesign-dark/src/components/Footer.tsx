import { Link } from 'react-router-dom';

const RESUME_URL = 'https://muddy-market-f25.notion.site/4ff47355f10946f99cd2d79435a2b654';

const Footer = () => (
  <footer className="site-footer">
    <div className="site-container site-footer__main">
      <dl className="site-footer__meta">
        <div>
          <dt>BUILT</dt>
          <dd>React · TypeScript · Firebase</dd>
        </div>
        <div>
          <dt>TYPE</dt>
          <dd>Pretendard · NanumSquare</dd>
        </div>
      </dl>
      <nav className="site-footer__nav" aria-label="하단 메뉴">
        <Link to="/portfolio">프로젝트</Link>
        <a href="https://github.com/mkllel" target="_blank" rel="noreferrer">GitHub</a>
        <a href={RESUME_URL} target="_blank" rel="noreferrer">이력서</a>
        <a href="mailto:vavfapi032@naver.com">이메일</a>
      </nav>
    </div>
    <div className="site-container site-footer__bottom">
      <span>
        <Link className="site-footer__admin-link" to="/admin" aria-label="관리자 로그인">©</Link>{' '}
        {new Date().getFullYear()} MinKyu Lee. All Rights Reserved.
      </span>
    </div>
  </footer>
);

export default Footer;
