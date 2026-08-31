import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { initializeSiteAccentTheme } from '../utils/siteTheme';

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  useEffect(() => {
    void initializeSiteAccentTheme();
  }, []);

  useEffect(() => {
    if (!import.meta.env.PROD) return;

    let analyticsTimer: number | undefined;
    const scheduleAnalytics = () => {
      analyticsTimer = window.setTimeout(() => {
        void import('../utils/firebaseAnalytics').then(({ initializeFirebaseAnalytics }) => (
          initializeFirebaseAnalytics()
        ));
      }, 3000);
    };

    if (document.readyState === 'complete') {
      scheduleAnalytics();
    } else {
      window.addEventListener('load', scheduleAnalytics, { once: true });
    }

    return () => {
      window.removeEventListener('load', scheduleAnalytics);
      if (analyticsTimer !== undefined) window.clearTimeout(analyticsTimer);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <a className="skip-link" href="#main-content">본문 바로가기</a>
      <Header />
      <main id="main-content" className="flex-grow" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
