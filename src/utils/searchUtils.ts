import { collection, query, getDocs, getFirestore } from 'firebase/firestore';
import { BlogPost, PortfolioProject } from './firebase';

interface SearchResult {
  id: string;
  title: string;
  description: string; 
  type: 'blog' | 'portfolio';
  link: string;
}

// HTML 태그를 제거하는 함수
function stripHtmlTags(html: string): string {
  if (!html) return '';
  // HTML 태그 제거 (여러 스페이스는 하나로 변환)
  return html
    .replace(/<[^>]*>/g, '') // HTML 태그 제거
    .replace(/&nbsp;/g, ' ') // &nbsp; 문자를 일반 공백으로 변환
    .replace(/\s+/g, ' ')    // 여러 개의 공백을 하나로 통합
    .trim();                 // 앞뒤 공백 제거
}

export async function searchContent(searchTerm: string): Promise<SearchResult[]> {
  if (!searchTerm.trim()) {
    return [];
  }

  const db = getFirestore();
  const results: SearchResult[] = [];
  const term = searchTerm.toLowerCase();

  // 블로그 포스트 검색
  try {
    const blogSnapshot = await getDocs(collection(db, 'blogPosts'));
    
    blogSnapshot.forEach(doc => {
      const post = { id: doc.id, ...doc.data() } as BlogPost;
      const title = post.title.toLowerCase();
      
      // HTML 태그를 제거한 콘텐츠
      const cleanContent = stripHtmlTags(post.content).toLowerCase();
      
      if (
        title.includes(term) || 
        cleanContent.includes(term) ||
        post.tags?.some(tag => tag.toLowerCase().includes(term)) ||
        (post.category && post.category.toLowerCase().includes(term))
      ) {
        // HTML 태그가 제거된 설명 생성
        const cleanDescription = stripHtmlTags(post.content);
        const shortDescription = cleanDescription.length > 100 
          ? cleanDescription.substring(0, 100) + '...' 
          : cleanDescription;
        
        results.push({
          id: post.id || doc.id,
          title: post.title,
          description: shortDescription,
          type: 'blog',
          link: `/blog/${post.id || doc.id}`
        });
      }
    });
  } catch (error) {
    console.error('Error searching blog posts:', error);
  }

  // 포트폴리오 프로젝트 검색
  try {
    const portfolioSnapshot = await getDocs(collection(db, 'portfolioProjects'));
    
    portfolioSnapshot.forEach(doc => {
      const project = { id: doc.id, ...doc.data() } as PortfolioProject;
      const title = project.title.toLowerCase();
      
      // HTML 태그를 제거한 설명
      const cleanDescription = stripHtmlTags(project.description).toLowerCase();
      
      if (
        title.includes(term) || 
        cleanDescription.includes(term) ||
        project.technologies?.some(tech => tech.toLowerCase().includes(term)) ||
        (project.category && project.category.toLowerCase().includes(term))
      ) {
        results.push({
          id: project.id || doc.id,
          title: project.title,
          description: stripHtmlTags(project.description),
          type: 'portfolio',
          link: `/portfolio/${project.id || doc.id}`
        });
      }
    });
  } catch (error) {
    console.error('Error searching portfolio projects:', error);
  }

  return results;
} 