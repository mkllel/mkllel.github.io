import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { BlogPost, PortfolioProject } from './firebase';

interface SearchResult {
  id: string;
  title: string;
  description: string; 
  type: 'blog' | 'portfolio';
  link: string;
}

// 마크다운 텍스트를 일반 텍스트로 변환하는 함수
function stripMarkdown(markdown: string): string {
  if (!markdown) return '';
  
  // 마크다운 문법 제거
  return markdown
    .replace(/#{1,6}\s+/g, '') // 제목 제거
    .replace(/\*\*(.*?)\*\*/g, '$1') // 볼드체 제거
    .replace(/\*(.*?)\*/g, '$1') // 이탤릭체 제거
    .replace(/~~(.*?)~~/g, '$1') // 취소선 제거
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // 링크 제거
    .replace(/!\[.*?\]\(.*?\)/g, '') // 이미지 제거
    .replace(/`{3}[\s\S]*?`{3}/g, '') // 코드 블록 제거
    .replace(/`(.*?)`/g, '$1') // 인라인 코드 제거
    .replace(/^\s*[-*+]\s+/gm, '') // 목록 기호 제거
    .replace(/^\s*\d+\.\s+/gm, '') // 번호 목록 제거
    .replace(/\n{2,}/g, '\n') // 여러 줄바꿈을 하나로 통합
    .trim();
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
      
      // 마크다운 문법을 제거한 콘텐츠
      const cleanContent = stripMarkdown(post.content).toLowerCase();
      
      if (
        title.includes(term) || 
        cleanContent.includes(term) ||
        post.tags?.some(tag => tag.toLowerCase().includes(term)) ||
        (post.category && post.category.toLowerCase().includes(term))
      ) {
        // 마크다운 문법을 제거한 설명 생성
        const cleanDescription = stripMarkdown(post.content);
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
      
      // 마크다운 문법을 제거한 설명
      const cleanDescription = stripMarkdown(project.description).toLowerCase();
      
      if (
        title.includes(term) || 
        cleanDescription.includes(term) ||
        project.technologies?.some(tech => tech.toLowerCase().includes(term)) ||
        (project.category && project.category.toLowerCase().includes(term))
      ) {
        results.push({
          id: project.id || doc.id,
          title: project.title,
          description: stripMarkdown(project.description),
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
