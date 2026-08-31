import { initializeApp } from 'firebase/app';
import { getFirestore, type Timestamp } from 'firebase/firestore';

export type ContentDate = Timestamp | Date | string | number | { seconds: number };

export interface BlogPost {
  id?: string;
  title: string;
  content: string;
  image?: string;
  category?: string;
  tags?: string[];
  createdAt: ContentDate;
  updatedAt?: ContentDate;
}

export interface PortfolioGalleryImage {
  url: string;
  alt: string;
}

export interface PortfolioResourceLink {
  url: string;
  label?: string;
}

export interface PortfolioProject {
  id?: string;
  title: string;
  description: string;
  summary?: string;
  role?: string;
  outcome?: string;
  architecture?: string[];
  imageUrl?: string;
  galleryImages?: PortfolioGalleryImage[];
  resourceLinks?: PortfolioResourceLink[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  link?: string;
  category?: string;
  featured?: boolean;
  featuredOrder?: number;
  isPrivate?: boolean;
  createdAt: ContentDate;
  updatedAt?: ContentDate;
}

const firebaseProjectId = import.meta.env.VITE_FIREBASE_PROJECT_ID || 'my-portfolio-2ea55';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyBD7_roMn5sLR-yyyDYQLjEUw5gCRQS9yc',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || `${firebaseProjectId}.firebaseapp.com`,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || 'https://my-portfolio-2ea55-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: firebaseProjectId,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'my-portfolio-2ea55.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '292379709314',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:292379709314:web:1b9e8dd734233c4251899b',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-BJ42JE7LGM',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
