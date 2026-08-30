import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, isAdmin } from '../../../utils/firebase';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';

interface UseAdminAuthResult {
  user: User | null;
  isAdminUser: boolean;
  isAuthLoading: boolean;
  isSigningOut: boolean;
  authError: string;
  logout: () => Promise<void>;
}

const useAdminAuth = (): UseAdminAuthResult => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [isAdminUser, setIsAdminUser] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      try {
        if (currentUser) {
          setUser(currentUser);
          const adminStatus = await isAdmin(currentUser.uid);
          setIsAdminUser(adminStatus);
          setIsAuthLoading(false);
        } else {
          setUser(null);
          setIsAdminUser(false);
          setIsAuthLoading(false);
          navigate('/admin');
        }
      } catch (error) {
        console.error('관리자 권한 확인 오류:', error);
        setAuthError('관리자 권한을 확인하는 중 오류가 발생했습니다.');
        setIsAuthLoading(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // 관리자 아닐 때 리디렉션
  useEffect(() => {
    if (!isAuthLoading && user && !isAdminUser) {
      navigate('/');
    }
  }, [isAdminUser, user, isAuthLoading, navigate]);

  const logout = async () => {
    setAuthError('');
    setIsSigningOut(true);

    try {
      await signOut(auth);
      navigate('/admin', { replace: true });
    } catch (error) {
      console.error('관리자 로그아웃 오류:', error);
      setAuthError('로그아웃 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSigningOut(false);
    }
  };

  return { user, isAdminUser, isAuthLoading, isSigningOut, authError, logout };
};

export default useAdminAuth;
