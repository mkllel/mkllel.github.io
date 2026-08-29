import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getBlogPresentation } from '../data/blogContent';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { formatDateKorean } from '../utils/dateUtils';
import { db, type BlogPost } from '../utils/firebase';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const presentation = post ? getBlogPresentation(post) : null;

  usePageMetadata({
    title: post?.title ?? '기술 기록 상세',
    description: post
      ? post.content.replace(/[#*_`\n]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 150)
      : '이민규의 개발 경험과 기술 선택을 정리한 글입니다.',
    path: `/blog/${id ?? ''}`,
    image: post?.image,
    type: 'article',
  });

  useEffect(() => {
    if (!id) {
      setError('글을 찾을 수 없습니다.');
      setLoading(false);
      return;
    }

    const fetchPost = async () => {
      try {
        const snapshot = await getDoc(doc(db, 'blogPosts', id));
        if (!snapshot.exists()) {
          setError('글을 찾을 수 없습니다.');
          return;
        }
        setPost({ id: snapshot.id, ...snapshot.data() } as BlogPost);
      } catch (fetchError) {
        console.error('블로그 상세 조회 오류:', fetchError);
        setError('글을 불러오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    void fetchPost();
  }, [id]);

  if (loading) return <div className="status-message status-message--page"><span className="loading-dot" />글을 불러오는 중입니다.</div>;

  if (error || !post || !presentation) {
    return (
      <div className="empty-state site-container">
        <h1>{error || '글을 찾을 수 없습니다.'}</h1>
        <Link className="button button--primary" to="/blog">기술 기록으로</Link>
      </div>
    );
  }

  return (
    <article className="article-page page-shell">
      <header className="article-header site-container">
        <Link className="back-link" to="/blog">← 기술 기록</Link>
        <div className="article-header__meta">
          {presentation.featured && <strong>대표 글</strong>}
          <span>{post.category || '개발'}</span>
          <time>{formatDateKorean(post.createdAt)}</time>
        </div>
        <h1>{post.title}</h1>
        {presentation.tags.length > 0 && (
          <ul className="tag-list" aria-label="태그">
            {presentation.tags.map((tag) => <li key={tag}>#{tag}</li>)}
          </ul>
        )}
      </header>

      {post.image && (
        <figure className="article-cover site-container">
          <img src={post.image} alt="" width="1080" height="520" decoding="async" />
        </figure>
      )}

      {presentation.sequence && (
        <section className="article-sequence site-container" aria-labelledby="sequence-heading">
          <p className="eyebrow">REQUEST LIFECYCLE</p>
          <h2 id="sequence-heading">자동화 요청 처리 흐름</h2>
          <ol className="architecture-flow architecture-flow--compact">
            {presentation.sequence.map((step, index) => (
              <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></li>
            ))}
          </ol>
        </section>
      )}

      <div className="article-layout site-container">
        <div className="article-body markdown-preview">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{presentation.content}</ReactMarkdown>
        </div>
        <aside className="article-aside">
          <div>
            <span>작성 기준</span>
            <p>실제 구현과 장애 대응 경험을 바탕으로 작성했습니다.</p>
          </div>
          {presentation.relatedProject && (
            <div>
              <span>관련 프로젝트</span>
              <Link to={`/portfolio/${presentation.relatedProject.id}`}>{presentation.relatedProject.title} →</Link>
            </div>
          )}
        </aside>
      </div>

      <footer className="article-footer site-container">
        <Link className="button button--primary" to="/blog">다른 기술 글 보기</Link>
      </footer>
    </article>
  );
};

export default BlogDetail;
