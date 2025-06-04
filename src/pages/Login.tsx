import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  GithubAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth';
import { auth, isAdmin, db } from '../utils/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isUserAdmin, setIsUserAdmin] = useState(false);
  
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // 사용자가 관리자인지 확인하는 함수
  const checkAndSetupAdmin = async (user: any) => {
    if (!user) return false;
    
    try {
      console.log('Checking if user is admin:', user.email, user.uid);
      
      // vavfapi032@gmail.com 계정은 자동으로 관리자로 설정
      if (user.email === import.meta.env.VITE_ADMIN_EMAIL) {
        console.log('관리자 계정 감지 - admin 페이지로 이동');
        await ensureAdminInFirestore(user);
        return true;
      }
      
      // 하드코딩된 UID가 관리자인지 확인
      if (user.uid === 'KtZLKuzl56QzPLiFVRVfovWVapz2') {
        console.log('Admin UID detected');
        await ensureAdminInFirestore(user);
        return true;
      }
      
      // Firestore에서 관리자 상태 확인
      const adminStatus = await isAdmin(user.uid);
      console.log('Admin status from Firestore:', adminStatus);
      return adminStatus;
    } catch (error) {
      console.error('Error checking admin status:', error);
      return false;
    }
  };
  
  // Firestore에 관리자 문서가 있는지 확인하고 없으면 생성
  const ensureAdminInFirestore = async (user: any) => {
    try {
      const adminDocRef = doc(db, "admins", user.uid);
      const adminDoc = await getDoc(adminDocRef);
      
      // 관리자 문서가 존재하지 않으면 생성
      if (!adminDoc.exists()) {
        console.log('Creating admin document for:', user.email);
        await setDoc(adminDocRef, {
          email: user.email,
          role: "admin",
          createdAt: new Date().toISOString(),
          photoURL: user.photoURL || null,
          displayName: user.displayName || null
        });
        console.log('Admin document created successfully');
      } else {
        console.log('Admin document already exists:', adminDoc.data());
      }
      
      return true;
    } catch (error) {
      console.error('Error ensuring admin in Firestore:', error);
      return false;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("로그인 상태 감지됨:", user.email, user.uid);
        const adminStatus = await checkAndSetupAdmin(user);
        console.log("관리자 상태:", adminStatus);
        setIsUserAdmin(adminStatus);
        
        if (adminStatus) {
          console.log('Redirecting to admin page...');
          navigate('/admin');
        }
      }
    });
    
    return () => unsubscribe();
  }, [navigate]);

  const handleEmailPasswordAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        // 회원가입 후 바로 로그인되므로, 관리자 체크 후 분기
        const user = auth.currentUser;
        if (user && user.email === import.meta.env.VITE_ADMIN_EMAIL) {
          navigate('/admin');
        } else {
        navigate('/');
        }
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('로그인 성공:', user.email, user.uid);
        // 관리자 체크 후 분기
        if (user.email === import.meta.env.VITE_ADMIN_EMAIL) {
          navigate('/admin');
        } else {
          navigate('/');
        }
      }
    } catch (error: any) {
      console.error('Authentication error:', error);
      setError(error.message || '인증 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("구글 로그인 성공:", user.email, user.uid);
      
      // 관리자 이메일 환경 변수 체크 (Vite 방식)
      if (user.email === import.meta.env.VITE_ADMIN_EMAIL) {
        console.log('관리자 계정 감지 - admin 페이지로 이동');
        await ensureAdminInFirestore(user);
          navigate('/admin');
          return;
      }
      
      // 백그라운드에서 관리자 권한 확인
      const adminStatus = await isAdmin(user.uid);
      console.log("관리자 상태 확인:", adminStatus);
      
      if (adminStatus) {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } catch (error: any) {
      console.error('Google sign-in error:', error);
      setError(error.message || 'Google 로그인 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleGithubSignIn = async () => {
    setError('');
    setLoading(true);
    
    try {
      const result = await signInWithPopup(auth, githubProvider);
      const user = result.user;
      console.log("깃허브 로그인 성공:", user.email, user.uid);
      
      // 백그라운드에서 관리자 권한 확인
      const adminStatus = await isAdmin(user.uid);
      console.log("관리자 상태 확인:", adminStatus);
      
      if (adminStatus) {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } catch (error: any) {
      console.error('GitHub sign-in error:', error);
      setError(error.message || 'GitHub 로그인 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12 md:py-16 bg-gray-50 dark:bg-gray-900 flex items-center">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6">
              {isSignUp ? '계정 만들기' : '로그인'}
            </h2>
            
            {error && (
              <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-md text-sm">
                {error}
              </div>
            )}
            
            <form onSubmit={handleEmailPasswordAuth} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  이메일
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-3 md:px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm md:text-base"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  비밀번호
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  className="w-full px-3 md:px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm md:text-base"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2 px-3 md:px-4 rounded-md bg-indigo-600 text-white font-medium disabled:opacity-70 text-sm md:text-base"
                >
                  {loading ? '처리 중...' : isSignUp ? '가입하기' : '로그인'}
                </button>
              </div>
            </form>
            
            <div className="mt-5 md:mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    또는
                  </span>
                </div>
              </div>
              
              <div className="mt-5 md:mt-6 space-y-3 md:space-y-4">
                <button
                  onClick={handleGoogleSignIn}
                  disabled={loading}
                  className="w-full py-2 px-3 md:px-4 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium flex items-center justify-center space-x-2 disabled:opacity-70 text-sm md:text-base"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                    <path fill="none" d="M1 1h22v22H1z" />
                  </svg>
                  <span>Google로 계속하기</span>
                </button>
                
                <button
                  onClick={handleGithubSignIn}
                  disabled={loading}
                  className="w-full py-2 px-3 md:px-4 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium flex items-center justify-center space-x-2 disabled:opacity-70 text-sm md:text-base"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub로 계속하기</span>
                </button>  
              </div>
            </div>
            
            <div className="mt-5 md:mt-6 text-center">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-indigo-600 dark:text-indigo-400 text-xs md:text-sm hover:underline"
              >
                {isSignUp ? '이미 계정이 있으신가요? 로그인' : '계정이 없으신가요? 가입하기'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 