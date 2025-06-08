import { Link } from 'react-router-dom';
// react-icons를 사용하려면 설치 후 주석 해제
// import { FaGithub, FaLinkedin, FaBlog, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 shadow-inner dark:bg-gray-800 py-8 md:py-10 text-gray-700 dark:text-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Section 1: Portfolio Info */}
          <div className="md:col-span-2">
            <Link to="/" className="text-xl md:text-2xl font-bold text-indigo-600 dark:text-indigo-400 hover:opacity-80 transition-opacity">
              MinKyu's Portfolio
            </Link>
            <p className="mt-3 md:mt-4 text-sm md:text-base max-w-md">
              열정적인 웹 개발자 이민규의 성장과 결과물을 담은 공간입니다.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3 md:mb-4">
              Pages
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm md:text-base hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  홈
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm md:text-base hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  포트폴리오
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm md:text-base hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  블로그
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact & Social */}
          <div>
            <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3 md:mb-4 mt-6 md:mt-0">
            Contact & Links
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                {/* react-icons 사용 시: <FaEnvelope className="w-5 h-5 mr-3 text-indigo-500 dark:text-indigo-400" /> */}
                <svg className="w-5 h-5 mr-3 flex-shrink-0 text-indigo-500 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:vavfapi032@naver.com" className="text-sm md:text-base hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate" title="vavfapi032@naver.com">
                  vavfapi032@naver.com
                </a>
              </li>
              <li className="flex items-center">
                {/* react-icons 사용 시: <FaGithub className="w-5 h-5 mr-3 text-indigo-500 dark:text-indigo-400" /> */}
                <svg className="w-5 h-5 mr-3 flex-shrink-0 text-indigo-500 dark:text-indigo-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.308.678.92.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                <a href="https://github.com/mkllel" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  GitHub
                </a>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 flex-shrink-0 text-indigo-500 dark:text-indigo-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
                </svg>
                <a href="https://muddy-market-f25.notion.site/4ff47355f10946f99cd2d79435a2b654" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  이력서
                </a>
              </li>
              {/* 블로그 링크가 있다면 추가 (아이콘은 예시) */}
              {/* <li className="flex items-center">
                <FaBlog className="w-5 h-5 mr-3 text-indigo-500 dark:text-indigo-400" />
                <a href="https://yourblog.com" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Blog
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Copyright & Motto */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 md:mt-10 pt-6 md:pt-8 text-center">
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} MinKyu Lee. All Rights Reserved.
          </p>
          <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
            "Stay Curious, Build Awesome."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;