import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

export type SiteAccentTheme = 'green' | 'blue' | 'purple';

const SITE_ACCENT_STORAGE_KEY = 'portfolio-site-accent';
const SITE_THEME_DOCUMENT = doc(db, 'siteSettings', 'theme');

const isSiteAccentTheme = (value: unknown): value is SiteAccentTheme =>
  value === 'green' || value === 'blue' || value === 'purple';

export const getCachedSiteAccentTheme = (): SiteAccentTheme => {
  const cachedTheme = localStorage.getItem(SITE_ACCENT_STORAGE_KEY);
  return isSiteAccentTheme(cachedTheme) ? cachedTheme : 'green';
};

export const applySiteAccentTheme = (accent: SiteAccentTheme, cache = true): void => {
  document.documentElement.dataset.accent = accent;
  if (cache) localStorage.setItem(SITE_ACCENT_STORAGE_KEY, accent);
};

export const getSiteAccentTheme = async (): Promise<SiteAccentTheme> => {
  const snapshot = await getDoc(SITE_THEME_DOCUMENT);
  if (!snapshot.exists()) return 'green';

  const accent = snapshot.data().accent;
  return isSiteAccentTheme(accent) ? accent : 'green';
};

export const initializeSiteAccentTheme = async (): Promise<SiteAccentTheme> => {
  try {
    const accent = await getSiteAccentTheme();
    applySiteAccentTheme(accent);
    return accent;
  } catch (error) {
    console.warn('사이트 강조색을 불러오지 못했습니다.', error);
    applySiteAccentTheme('green');
    return 'green';
  }
};

export const saveSiteAccentTheme = async (accent: SiteAccentTheme): Promise<void> => {
  await setDoc(SITE_THEME_DOCUMENT, { accent });
  applySiteAccentTheme(accent);
};
