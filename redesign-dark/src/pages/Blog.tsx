import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';
import { getBlogPresentation } from '../data/blogContent';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { contentDateToSeconds, formatDateKorean } from '../utils/dateUtils';
import { db, type BlogPost } from '../utils/firebase';

const stripMarkdown = (content: string) => content
  .replace(/!\[.*?\]\(.*?\)/g, '')
  .replace(/\[([^\]]*)\]\(.*?\)/g, '$1')
  .replace(/`{3}[\s\S]*?`{3}/g, '')
  .replace(/#{1,6}\s+/g, '')
  .replace(/[*_~`>]/g, '')
  .replace(/^\s*[-+]\s+/gm, '')
  .replace(/<[^>]*>/g, '')
  .replace(/\s+/g, ' ')
  .trim();

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  usePageMetadata({
    title: '기술 기록',
    description: 'Selenium 업무 자동화, FastAPI 설계, React Router와 GitHub Pages 배포 문제를 실제 경험 중심으로 기록합니다.',
    path: '/blog',
  });

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'blogPosts'),
      (snapshot) => {
        const nextPosts = snapshot.docs.map((item) => ({ id: item.id, ...item.data() })) as BlogPost[];
        nextPosts.sort((a, b) => contentDateToSeconds(b.createdAt) - contentDateToSeconds(a.createdAt));
        setPosts(nextPosts);
        setLoading(false);
      },
      (snapshotError) => {
        console.error('블로그 목록 조회 오류:', snapshotError);
        setError('글을 불러오는 중 오류가 발생했습니다.');
        setLoading(false);
      },
    );
    return unsubscribe;
  }, []);

  const categories = useMemo(
    () => Array.from(new Set(posts.map((post) => post.category).filter(Boolean))) as string[],
    [posts],
  );
  const normalizedSearch = searchTerm.trim().toLocaleLowerCase('ko-KR');
  const filteredPosts = posts.filter((post) => {
    const presentation = getBlogPresentation(post);
    const searchable = `${post.title} ${presentation.content} ${presentation.tags.join(' ')}`.toLocaleLowerCase('ko-KR');
    return (!normalizedSearch || searchable.includes(normalizedSearch)) && (!category || post.category === category);
  });

  return (
    <div className="page-shell">
      <header className="page-intro site-container">
        <p className="eyebrow">ENGINEERING NOTES</p>
        <h1>기술 기록</h1>
        <p>사용해 본 기술보다, 실제로 마주친 제약과 선택의 근거를 기록합니다.</p>
      </header>

      <section className="site-container blog-browser" aria-label="기술 글 목록">
        <div className="blog-filters">
          <label>
            <span>글 검색</span>
            <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="제목이나 기술로 검색" />
          </label>
          <label>
            <span>카테고리</span>
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              <option value="">전체 카테고리</option>
              {categories.map((item) => <option value={item} key={item}>{item}</option>)}
            </select>
          </label>
        </div>

        {loading && <div className="status-message"><span className="loading-dot" />글을 불러오는 중입니다.</div>}
        {error && <p className="status-message status-message--error">{error}</p>}
        {!loading && !error && (
          <div className="blog-list">
            {filteredPosts.map((post) => <BlogCard key={post.id} post={post} />)}
          </div>
        )}
        {!loading && !error && filteredPosts.length === 0 && <p className="status-message">조건에 맞는 글이 없습니다.</p>}
      </section>
    </div>
  );
};

const BlogCard = ({ post }: { post: BlogPost }) => {
  const presentation = getBlogPresentation(post);
  const excerpt = stripMarkdown(presentation.content).slice(0, 190);

  return (
    <article className="blog-list-item">
      {post.image && (
        <Link className="blog-list-item__image" to={`/blog/${post.id}`} tabIndex={-1} aria-hidden="true">
          <img src={post.image} alt="" width="420" height="240" loading="lazy" decoding="async" />
        </Link>
      )}
      <div className="blog-list-item__body">
        <div className="blog-list-item__meta">
          {presentation.featured && <strong>대표 글</strong>}
          <span>{post.category || '개발'}</span>
          <time>{formatDateKorean(post.createdAt)}</time>
        </div>
        <h2><Link to={`/blog/${post.id}`}>{post.title}</Link></h2>
        <p>{excerpt}{excerpt.length === 190 ? '…' : ''}</p>
        {presentation.tags.length > 0 && (
          <ul className="tag-list" aria-label="태그">
            {presentation.tags.slice(0, 6).map((tag) => <li key={tag}>#{tag}</li>)}
          </ul>
        )}
        <Link className="text-link" to={`/blog/${post.id}`}>글 읽기 <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
};

export default Blog;
