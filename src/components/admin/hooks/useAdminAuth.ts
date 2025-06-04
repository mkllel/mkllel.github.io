import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, isAdmin } from '../../../utils/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

interface UseAdminAuthResult {
  user: User | null;
  isAdminUser: boolean;
  isAuthLoading: boolean;
  authError: string;
}

const useAdminAuth = (): UseAdminAuthResult => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [isAdminUser, setIsAdminUser] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    console.log('Admin 인증 확인 시작');
    const checkAuth = () => {
      const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        try {
          if (currentUser) {
            console.log('인증된 사용자:', currentUser.email, currentUser.uid);
            setUser(currentUser);
            
            // 관리자 체크 부분을 환경 변수 기반으로 변경
            if (
              currentUser.email === import.meta.env.VITE_ADMIN_EMAIL || 
              currentUser.uid === 'KtZLKuzl56QzPLiFVRVfovWVapz2'
            ) {
              console.log('하드코딩된 관리자 계정 확인됨');
              setIsAdminUser(true);
              setIsAuthLoading(false);
            } else {
              // Firebase admin 컬렉션에서 확인
              console.log('Firebase admin 컬렉션에서 관리자 확인 중...');
              const adminStatus = await isAdmin(currentUser.uid);
              console.log('관리자 확인 결과:', adminStatus);
              setIsAdminUser(adminStatus);
              setIsAuthLoading(false);
            }
          } else {
            console.log('인증된 사용자 없음');
            setUser(null);
            setIsAdminUser(false);
            setIsAuthLoading(false);
            navigate('/login');
          }
        } catch (error) {
          console.error('관리자 권한 확인 오류:', error);
          setAuthError('관리자 권한을 확인하는 중 오류가 발생했습니다.');
          setIsAuthLoading(false);
        }
      });

      return () => unsubscribe();
    };

    checkAuth();
  }, [navigate]);

  // 관리자 아닐 때 리디렉션
  useEffect(() => {
    if (!isAuthLoading && user && !isAdminUser) {
      console.log('관리자 아님, 홈으로 리디렉션');
      navigate('/');
    }
  }, [isAdminUser, user, isAuthLoading, navigate]);

  return { user, isAdminUser, isAuthLoading, authError };
};

export default useAdminAuth; 