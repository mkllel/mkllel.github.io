import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchContent } from '../utils/searchUtils';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'portfolio';
  link: string;
}

// HTML 태그를 제거하는 함수 (이중 안전장치)
function stripHtmlTags(html: string): string {
  if (!html) return '';
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const SearchComponent: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // 검색 결과 가져오기
  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const searchResults = await searchContent(searchTerm);
      // HTML 태그가 남아있을 경우 제거 (이중 안전장치)
      const cleanResults = searchResults.map(result => ({
        ...result,
        title: stripHtmlTags(result.title),
        description: stripHtmlTags(result.description)
      }));
      setResults(cleanResults);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // 검색 아이콘 클릭 시 검색창 열기
  const toggleSearch = () => {
    setIsSearchOpen(prev => !prev);
    if (!isSearchOpen && inputRef.current) {
      // 다음 렌더링 사이클에서 포커스
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  // Enter 키 눌렀을 때 검색 실행
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // 검색 결과 클릭 시 해당 페이지로 이동
  const handleResultClick = (link: string) => {
    setIsSearchOpen(false);
    setResults([]);
    setSearchTerm('');
    navigate(link);
  };

  // 검색창 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={searchRef}>
      {/* 검색 아이콘 */}
      <button
        className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 p-1.5 rounded-full focus:outline-none"
        onClick={toggleSearch}
        aria-label="Search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>

      {/* 검색창 */}
      {isSearchOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-80 md:w-96 bg-white dark:bg-gray-800 rounded-md shadow-xl z-20 overflow-hidden">
          <div className="p-3 flex">
            <input
              ref={inputRef}
              type="text"
              placeholder="검색어를 입력하세요..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 py-1.5 px-3 text-sm rounded-l-md dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={handleSearch}
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-1.5 px-3 rounded-r-md focus:outline-none"
            >
              검색
            </button>
          </div>

          {/* 로딩 표시 */}
          {isLoading && (
            <div className="p-4 text-center">
              <div className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-indigo-600 border-r-transparent"></div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">검색 중...</p>
            </div>
          )}

          {/* 검색 결과 */}
          {!isLoading && results.length > 0 && (
            <div className="max-h-96 overflow-y-auto divide-y divide-gray-200 dark:divide-gray-700">
              {results.map(result => (
                <div
                  key={`${result.type}-${result.id}`}
                  className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                  onClick={() => handleResultClick(result.link)}
                >
                  <div className="flex items-center mb-1">
                    <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 mr-2">
                      {result.type === 'blog' ? '블로그' : '포트폴리오'}
                    </span>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">{result.title}</h4>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">{result.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* 결과 없음 */}
          {!isLoading && searchTerm && results.length === 0 && (
            <div className="p-4 text-center text-gray-600 dark:text-gray-400">
              <p>검색 결과가 없습니다.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchComponent; 