import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

type Theme = 'light' | 'dark';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
  const menuRef = useRef<HTMLDivElement>(null);
  const scrollProgressRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    let animationFrame = 0;

    const updateProgress = () => {
      animationFrame = 0;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0
        ? Math.min(Math.max(window.scrollY / scrollableHeight, 0), 1)
        : 0;
      scrollProgressRef.current?.style.setProperty('--scroll-progress', String(progress));
    };

    const requestUpdate = () => {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(updateProgress);
      }
    };

    requestUpdate();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    const resizeObserver = new ResizeObserver(requestUpdate);
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      resizeObserver.disconnect();
      if (animationFrame !== 0) window.cancelAnimationFrame(animationFrame);
    };
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <div className="site-container site-header__inner">
        <Link to="/" className="brand" aria-label="이민규 포트폴리오 홈">
          <img className="brand__logo" src="/icon.ico" alt="" width="34" height="34" />
          <span>Backend-focused Web Developer</span>
        </Link>

        <nav className="desktop-nav" aria-label="주요 메뉴">
          <ThemeToggle theme={theme} onToggle={() => setTheme(current => current === 'dark' ? 'light' : 'dark')} />
          <HeaderLink to="/" label="소개" />
          <HeaderLink to="/portfolio" label="프로젝트" />
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-nav" ref={menuRef}>
          <nav className="site-container" aria-label="모바일 메뉴">
            <div className="mobile-nav__theme-row">
              <ThemeToggle theme={theme} onToggle={() => setTheme(current => current === 'dark' ? 'light' : 'dark')} />
            </div>
            <HeaderLink to="/" label="소개" />
            <HeaderLink to="/portfolio" label="프로젝트" />
          </nav>
        </div>
      )}
      <div className="site-header__scroll-progress" ref={scrollProgressRef} aria-hidden="true" />
    </header>
  );
};

const HeaderLink = ({ to, label }: { to: string; label: string }) => {
  const location = useLocation();
  const active = to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);
  return <Link to={to} className={active ? 'nav-link nav-link--active' : 'nav-link'}>{label}</Link>;
};

const ThemeToggle = ({ theme, onToggle }: { theme: Theme; onToggle: () => void }) => {
  const nextTheme = theme === 'dark' ? '화이트' : '다크';

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`${nextTheme} 모드로 전환`}
      title={`${nextTheme} 모드로 전환`}
      onClick={onToggle}
    >
      <SunIcon />
      <MoonIcon />
    </button>
  );
};

const SunIcon = (): ReactNode => (
  <svg className="theme-toggle__icon theme-toggle__sun" width="19" height="19" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const MoonIcon = (): ReactNode => (
  <svg className="theme-toggle__icon theme-toggle__moon" width="19" height="19" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MenuIcon = (): ReactNode => (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CloseIcon = (): ReactNode => (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default Header;
