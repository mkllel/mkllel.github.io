import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Ensure useNavigate is imported
import { auth, isAdmin } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import SearchComponent from './SearchComponent';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminUser, setIsAdminUser] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate(); // Initialize useNavigate
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 관리자 상태를 검사하는 함수
  const checkAdminStatus = async (uid: string) => {
    try {
      console.log('Checking admin status for UID:', uid);
      // 하드코딩된 관리자 계정 확인
      if (uid === 'KtZLKuzl56QzPLiFVRVfovWVapz2') {
        console.log('Hardcoded admin UID detected');
        setIsAdminUser(true);
        return true;
      }
      
      // Firebase에서 관리자 상태 확인
      const adminStatus = await isAdmin(uid);
      console.log('Admin status check result from isAdmin():', adminStatus);
      setIsAdminUser(adminStatus);
      return adminStatus;
    } catch (error) {
      console.error('Error checking admin status:', error);
      setIsAdminUser(false);
      return false;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log('Login state changed:', user?.email, user?.uid);
      setIsLoggedIn(!!user);
      
      if (user) {
        setUserId(user.uid);
        
        try {
          // 특정 계정에 대한 하드코딩된 관리자 권한 체크
          if (user.email === 'vavfapi032@gmail.com' || user.uid === 'KtZLKuzl56QzPLiFVRVfovWVapz2') {
            console.log('Admin user detected:', user.email);
            setIsAdminUser(true);
          } else {
            // Firestore에서 관리자 상태 확인
            await checkAdminStatus(user.uid);
          }
        } catch (error) {
          console.error('Error checking admin status:', error);
          setIsAdminUser(false);
        }
      } else {
        setUserId(null);
        setIsAdminUser(false);
      }
    });
    
    return () => unsubscribe();
  }, []);

  // 페이지 로드 시 현재 사용자가 관리자인지 한번 더 확인
  useEffect(() => {
    const verifyAdminOnLoad = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        console.log('Verifying admin status on load for:', currentUser.email);
        await checkAdminStatus(currentUser.uid);
      }
    };
    
    verifyAdminOnLoad();
  }, []);

  useEffect(() => {
    // Close menu when page changes
    setIsMenuOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      setIsAdminUser(false);
      setUserId(null);
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Admin 버튼 클릭 핸들러
  const handleAdminClick = async () => {
    console.log('Admin 버튼 클릭됨');
    const currentUser = auth.currentUser;
    
    if (!currentUser) {
      console.log('로그인된 사용자가 없음');
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }
    
    console.log('현재 사용자:', currentUser.email, currentUser.uid);
    
    // isAdminUser 상태를 직접 확인하여 네비게이션 결정
    if (isAdminUser) {
      console.log('isAdminUser 상태가 true임, 관리자 페이지로 이동');
      navigate('/admin'); // Use navigate for client-side routing
    } else {
      // 이 부분은 이론적으로 isAdminUser가 false이면 Admin 버튼이 보이지 않으므로 도달하기 어려움
      // 하지만 안전을 위해 추가적인 확인 또는 경고를 둘 수 있음
      console.log('관리자 권한 없음 (isAdminUser 상태가 false)');
      
      // 만약 상태가 아직 업데이트되지 않았을 경우를 대비해 실시간 확인을 추가할 수도 있음
      try {
        const adminCheck = await isAdmin(currentUser.uid);
        if (adminCheck) {
          console.log('실시간 확인 결과 관리자임, 관리자 페이지로 이동');
          navigate('/admin'); // Use navigate
        } else {
          console.log('실시간 확인 결과 관리자 권한 없음');
          alert('관리자 권한이 없습니다.');
        }
      } catch (error) {
        console.error('관리자 권한 확인 중 오류 발생:', error);
        alert('권한 확인 중 오류가 발생했습니다.');
      }
    }
  };

  console.log('Current state:', { isLoggedIn, isAdminUser, userId });

  return (
    <header className="bg-white shadow-sm dark:bg-gray-800 sticky top-0 z-10">
      <div className="container mx-auto py-3 md:py-4 flex justify-between items-center">
        <Link to="/" className="text-lg md:text-xl font-bold text-indigo-600 dark:text-indigo-400">
          MKLLEL
        </Link>
        
        {/* Mobile menu button - hamburger */}
        {!isMenuOpen && (
          <button 
            className="md:hidden flex items-center p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 z-20"
            onClick={toggleMenu}
            aria-label="Open menu"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-gray-800 dark:bg-gray-200 rounded-full"></span>
              <span className="w-full h-0.5 bg-gray-800 dark:bg-gray-200 rounded-full"></span>
              <span className="w-full h-0.5 bg-gray-800 dark:bg-gray-200 rounded-full"></span>
            </div>
          </button>
        )}
        
        {/* Mobile menu button - X */}
        {isMenuOpen && (
          <button 
            className="md:hidden flex items-center p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 z-20"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6 md:space-x-8">
          {/* 검색 컴포넌트 */}
          <SearchComponent />
          
          <NavLink to="/" emoji="🏠">Home</NavLink>
          <NavLink to="/portfolio" emoji="💼">Portfolio</NavLink>
          <NavLink to="/blog" emoji="📝">Blog</NavLink>
          
          {isAdminUser && (
            <button 
              onClick={handleAdminClick} // Keep using the updated handleAdminClick
              className="text-sm md:text-base text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium flex items-center"
            >
              <span className="mr-1">⚙️</span>
              Admin
            </button>
          )}
          
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-sm md:text-base text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium flex items-center"
            >
              <span className="mr-1">🚪</span>
              Logout
            </button>
          ) : (
            <NavLink to="/login" emoji="🔐">Login</NavLink>
          )}
        </nav>
        
        {/* Mobile navigation overlay */}
        <div 
          className={`fixed inset-0 bg-gray-900 bg-opacity-80 backdrop-blur-sm z-10 md:hidden transition-all duration-400 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          {/* Mobile menu */}
          <div 
            ref={menuRef}
            className={`absolute inset-0 bg-white dark:bg-gray-800 shadow-lg transform transition-all duration-400 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <div className="flex flex-col p-6 h-full">
              {/* 모바일 검색 */}
              <div className="flex justify-center mb-8">
                <SearchComponent />
              </div>
              
              <nav className="flex flex-col items-center justify-center h-full space-y-10">
                <MobileNavLink to="/" onClick={toggleMenu} emoji="🏠">Home</MobileNavLink>
                <MobileNavLink to="/portfolio" onClick={toggleMenu} emoji="💼">Portfolio</MobileNavLink>
                <MobileNavLink to="/blog" onClick={toggleMenu} emoji="📝">Blog</MobileNavLink>
                
                {isAdminUser && (
                  <button 
                    onClick={() => {
                      toggleMenu();
                      handleAdminClick();
                    }}
                    className="relative text-2xl font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center justify-center w-full px-2 py-3 transition-colors group"
                  >
                    <span className="text-3xl mr-3">⚙️</span>
                    Admin
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-indigo-500 group-hover:w-1/2 transition-all duration-300 ease-out"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-indigo-500 group-hover:w-1/2 transition-all duration-300 ease-out"></span>
                  </button>
                )}
                
                {isLoggedIn ? (
                  <button
                    onClick={() => {
                      handleLogout();
                      toggleMenu();
                    }}
                    className="relative text-2xl font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center justify-center w-full px-2 py-3 transition-colors group"
                  >
                    <span className="text-3xl mr-3">🚪</span>
                    Logout
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-indigo-500 group-hover:w-1/2 transition-all duration-300 ease-out"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-indigo-500 group-hover:w-1/2 transition-all duration-300 ease-out"></span>
                  </button>
                ) : (
                  <MobileNavLink to="/login" onClick={toggleMenu} emoji="🔐">Login</MobileNavLink>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// NavLink component with active styles
const NavLink = ({ to, emoji, children }: { to: string; emoji?: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`text-sm md:text-base text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium flex items-center ${
        isActive
          ? 'text-indigo-600 dark:text-indigo-400'
          : ''
      }`}
    >
      {emoji && <span className="mr-1">{emoji}</span>}
      {children}
    </Link>
  );
};

// Mobile NavLink with larger text and centered design
const MobileNavLink = ({ to, onClick, emoji, children }: { to: string; onClick?: () => void; emoji?: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`relative text-2xl font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center justify-center w-full px-2 py-3 transition-colors group ${
        isActive
          ? 'text-indigo-600 dark:text-indigo-400'
          : ''
      }`}
    >
      {emoji && <span className="text-3xl mr-3">{emoji}</span>}
      {children}
      <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-indigo-500 group-hover:w-1/2 transition-all duration-300 ease-out"></span>
      <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-indigo-500 group-hover:w-1/2 transition-all duration-300 ease-out"></span>
    </Link>
  );
};

export default Header;