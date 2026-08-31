import { app } from './firebase';

export const initializeFirebaseAnalytics = async (): Promise<void> => {
  try {
    const { getAnalytics, isSupported } = await import('firebase/analytics');
    if (await isSupported()) getAnalytics(app);
  } catch (error) {
    console.warn('Analytics initialization error:', error);
  }
};
