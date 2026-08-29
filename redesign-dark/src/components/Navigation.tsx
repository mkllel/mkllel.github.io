import { Link, useLocation } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('로그아웃 오류:', error);
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
                MinKyu Lee
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/')
                    ? 'border-indigo-500 text-gray-900 dark:text-white'
                    : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200'
                }`}
              >
                홈
              </Link>
              <Link
                to="/portfolio"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/portfolio')
                    ? 'border-indigo-500 text-gray-900 dark:text-white'
                    : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200'
                }`}
              >
                포트폴리오
              </Link>
              <Link
                to="/blog"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/blog')
                    ? 'border-indigo-500 text-gray-900 dark:text-white'
                    : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200'
                }`}
              >
                블로그
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {auth.currentUser ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/admin"
                  className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  관리자
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  로그아웃
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200"
              >
                로그인
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;