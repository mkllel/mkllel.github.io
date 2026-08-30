import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import LoadingSpinner from '../components/LoadingSpinner';
import { auth, isAdmin } from '../utils/firebase';
import Admin from './Admin';
import Login from './Login';

type AdminView = 'loading' | 'login' | 'admin';

const AdminRoute = () => {
  const [view, setView] = useState<AdminView>('loading');

  useEffect(() => {
    let active = true;
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        if (active) setView('login');
        return;
      }

      try {
        const hasAdminAccess = await isAdmin(user.uid);
        if (!active) return;

        if (hasAdminAccess) {
          setView('admin');
          return;
        }

        await signOut(auth);
        if (active) setView('login');
      } catch (error) {
        console.error('관리자 경로 권한 확인 오류:', error);
        await signOut(auth).catch(() => undefined);
        if (active) setView('login');
      }
    });

    return () => {
      active = false;
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    document.title = view === 'admin' ? '관리자 대시보드 | 이민규' : '관리자 인증 | 이민규';
    const existingRobots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const robots = existingRobots ?? document.createElement('meta');
    const previousContent = existingRobots?.content;

    if (!existingRobots) {
      robots.name = 'robots';
      document.head.appendChild(robots);
    }
    robots.content = 'noindex,nofollow';

    return () => {
      if (existingRobots) {
        robots.content = previousContent ?? '';
      } else {
        robots.remove();
      }
    };
  }, [view]);

  if (view === 'loading') {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return view === 'admin' ? <Admin /> : <Login />;
};

export default AdminRoute;
