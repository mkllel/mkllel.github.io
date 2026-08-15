import { useState, useEffect } from 'react';
import { collection, onSnapshot, getFirestore, Timestamp } from 'firebase/firestore';
import { PortfolioProject, type ContentDate } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import PortfolioCard from '../components/PortfolioCard';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filterType, setFilterType] = useState<'category' | 'technology'>('category');
  const [portfolioProjects, setPortfolioProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch portfolio projects from Firebase
  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    
    const unsubscribe = onSnapshot(
      collection(db, 'portfolioProjects'),
      (snapshot) => {
        const projects = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as PortfolioProject));
        
        // Sort projects by creation date (newest first)
        projects.sort((a, b) => {
          if (!a.createdAt || !b.createdAt) return 0;
          
          // Handle different timestamp types
          const getTimeValue = (timestamp: ContentDate) => {
            if (timestamp instanceof Timestamp) {
              return timestamp.seconds;
            } else if (timestamp instanceof Date) {
              return timestamp.getTime() / 1000;
            } else if (typeof timestamp === 'object' && 'seconds' in timestamp) {
              return timestamp.seconds;
            } else if (typeof timestamp === 'string') {
              const parsedTime = Date.parse(timestamp);
              return Number.isNaN(parsedTime) ? 0 : parsedTime / 1000;
            } else if (typeof timestamp === 'number') {
              return timestamp > 9999999999 ? timestamp / 1000 : timestamp;
            }
            return 0;
          };
          
          return getTimeValue(b.createdAt) - getTimeValue(a.createdAt);
        });
        
        setPortfolioProjects(projects);
        setLoading(false);
      },
      (err) => {
        console.error('Error fetching portfolio projects: ', err);
        setError('Failed to load portfolio projects. Please try again later.');
        setLoading(false);
      }
    );
    
    return () => unsubscribe();
  }, []);

  const filterProjects = (filter: string, type: 'category' | 'technology' = 'category') => {
    setActiveFilter(filter);
    setFilterType(type);
  };

  // Get unique categories from projects
  const allCategories: string[] = Array.from(
    new Set(
      portfolioProjects
        .map(project => project.category)
        .filter(Boolean) as string[]
    )
  );

  // Get unique technologies from projects
  const allTechnologies: string[] = Array.from(
    new Set(
      portfolioProjects
        .flatMap(project => project.technologies || [])
        .filter(Boolean)
    )
  );

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => 
        filterType === 'category' 
          ? project.category === activeFilter
          : project.technologies?.includes(activeFilter)
      );

  return (
    <div className="w-full min-h-screen py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6">Portfolio</h1>
        <p className="text-base md:text-xl text-center text-gray-600 dark:text-gray-400 mb-8 md:mb-12 max-w-3xl mx-auto">
          사용한 기술과 설명이 담긴 프로젝트 모음입니다.
        </p>

        {/* Filter type selector */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                filterType === 'category' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
              }`}
              onClick={() => {
                setFilterType('category');
                setActiveFilter('all');
              }}
            >
              카테고리
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                filterType === 'technology' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
              }`}
              onClick={() => {
                setFilterType('technology');
                setActiveFilter('all');
              }}
            >
              기술
            </button>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          <FilterButton 
            active={activeFilter === 'all'} 
            onClick={() => filterProjects('all', filterType)}
          >
            전체 프로젝트
          </FilterButton>
          
          {filterType === 'category' ? (
            allCategories.map(category => (
              <FilterButton 
                key={category}
                active={activeFilter === category} 
                onClick={() => filterProjects(category, 'category')}
              >
                {category}
              </FilterButton>
            ))
          ) : (
            allTechnologies.map(tech => (
              <FilterButton 
                key={tech}
                active={activeFilter === tech} 
                onClick={() => filterProjects(tech, 'technology')}
              >
                {tech}
              </FilterButton>
            ))
          )}
        </div>

        {/* Loading and Error States */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading projects...</p>
          </div>
        )}

        {!loading && error && (
          <div className="text-center py-12">
            <p className="text-red-500">{error}</p>
          </div>
        )}

        {/* Projects grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <div className="col-span-full text-center py-8 md:py-12">
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                  해당 카테고리에 프로젝트가 없습니다
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// FilterButton component
const FilterButton = ({ 
  children, 
  active, 
  onClick 
}: { 
  children: React.ReactNode; 
  active: boolean; 
  onClick: () => void;
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
        active 
          ? 'bg-indigo-600 text-white' 
          : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// ProjectCard component
const ProjectCard = ({ project }: { project: PortfolioProject }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/portfolio/${project.id}`);
  };

  return (
    <PortfolioCard project={project} onClick={handleClick} />
  );
};

export default Portfolio; 
