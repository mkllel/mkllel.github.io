import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, onSnapshot, getFirestore, Timestamp } from 'firebase/firestore';
import { BlogPost as BlogPostType } from '../utils/firebase';
import { formatDateKorean } from '../utils/dateUtils';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [blogPosts, setBlogPosts] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch blog posts from Firebase
  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    
    const unsubscribe = onSnapshot(
      collection(db, 'blogPosts'),
      (snapshot) => {
        const posts = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as BlogPostType));
        
        // Sort posts by creation date (newest first)
        posts.sort((a, b) => {
          if (!a.createdAt || !b.createdAt) return 0;
          
          // Handle different timestamp types
          const getTimeValue = (timestamp: any) => {
            if (timestamp instanceof Timestamp) {
              return timestamp.seconds;
            } else if (timestamp instanceof Date) {
              return timestamp.getTime() / 1000;
            }
            return 0;
          };
          
          return getTimeValue(b.createdAt) - getTimeValue(a.createdAt);
        });
        
        setBlogPosts(posts);
        setLoading(false);
      },
      (err) => {
        console.error('Error fetching blog posts: ', err);
        setError('Failed to load blog posts. Please try again later.');
        setLoading(false);
      }
    );
    
    return () => unsubscribe();
  }, []);

  // Filter blogs based on search term and category
  const filteredBlogs = blogPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.content?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });

  // Extract unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category).filter(Boolean)));

  return (
    <div className="w-full min-h-screen py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6">Blog</h1>
        <p className="text-base md:text-xl text-center text-gray-600 dark:text-gray-400 mb-8 md:mb-12 max-w-3xl mx-auto">
          개발 경험, 기술 팁, 프로젝트 이야기를 공유합니다.
        </p>

        {/* Search and Filter */}
        <div className="mb-8 md:mb-10 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="글 검색..."
                className="w-full px-3 md:px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="px-3 md:px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base"
              value={selectedCategory || ''}
              onChange={(e) => setSelectedCategory(e.target.value || null)}
            >
              <option value="">전체 카테고리</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Loading and Error States */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading blog posts...</p>
          </div>
        )}

        {!loading && error && (
          <div className="text-center py-12">
            <p className="text-red-500">{error}</p>
          </div>
        )}

        {/* Blog posts */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map(post => (
                <BlogPostCard key={post.id} post={post} />
              ))
            ) : (
              <div className="col-span-2 text-center py-8 md:py-12">
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">게시물을 찾을 수 없습니다</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// BlogPostCard component
const BlogPostCard = ({ post }: { post: BlogPostType }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/blog/${post.id}`);
  };

  // Extract a short excerpt from the content and remove markdown
  const excerpt = post.content ? (() => {
    const cleanContent = post.content
      .replace(/!\[.*?\]\(.*?\)/g, '') // 이미지 제거
      .replace(/\[([^\]]*)\]\(.*?\)/g, '$1') // 링크에서 텍스트만 추출
      .replace(/#{1,6}\s+/g, '') // 제목 마크다운 제거
      .replace(/\*\*(.*?)\*\*/g, '$1') // 볼드체 제거
      .replace(/\*(.*?)\*/g, '$1') // 이탤릭체 제거
      .replace(/~~(.*?)~~/g, '$1') // 취소선 제거
      .replace(/`{3}[\s\S]*?`{3}/g, '') // 코드 블록 제거
      .replace(/`(.*?)`/g, '$1') // 인라인 코드 제거
      .replace(/^\s*[-*+]\s+/gm, '') // 목록 기호 제거
      .replace(/^\s*\d+\.\s+/gm, '') // 번호 목록 제거
      .replace(/\n{2,}/g, '\n') // 여러 줄바꿈을 하나로 통합
      .replace(/<[^>]*>/g, '') // HTML 태그 제거
      .trim();

    return cleanContent.length > 150 
      ? cleanContent.substring(0, 150) + '...' 
      : cleanContent;
  })() : '내용 없음';

  // Format date safely using the utility function
  const formatDate = () => {
    if (!post.createdAt) return '날짜 없음';
    try {
      return formatDateKorean(post.createdAt);
    } catch (error) {
      console.error('날짜 형식 변환 오류:', error);
      return '날짜 변환 오류';
    }
  };

  return (
    <div className="blog-card bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md cursor-pointer" onClick={handleClick}>
      <div className="h-48 overflow-hidden relative">
        {post.image ? (
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0"></div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
          <span>{formatDate()}</span>
          {post.category && (
            <>
              <span className="mx-2">•</span>
              <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs px-2 py-1 rounded">
                {post.category}
              </span>
            </>
          )}
        </div>
        <h3 className="text-xl font-bold mb-2">{post.title.replace(/#{1,6}\s+|\*\*|\*/g, '')}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{excerpt}</p>
        
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
        
        <button 
          className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/blog/${post.id}`);
          }}
        >
          자세히 보기
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Blog; 
