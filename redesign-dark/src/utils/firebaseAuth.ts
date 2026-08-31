import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { app, db } from './firebase';

const BOOTSTRAP_ADMIN_UID = 'KtZLKuzl56QzPLiFVRVfovWVapz2';
const adminCache = new Map<string, boolean>();

const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error('Error setting auth persistence:', error);
});

const ensureBootstrapAdminDocument = async (): Promise<void> => {
  const currentUser = auth.currentUser;

  if (!currentUser || currentUser.uid !== BOOTSTRAP_ADMIN_UID) return;

  try {
    const adminDocRef = doc(db, 'admins', currentUser.uid);
    const adminDoc = await getDoc(adminDocRef);

    if (!adminDoc.exists()) {
      await setDoc(adminDocRef, {
        email: currentUser.email,
        role: 'admin',
        createdAt: new Date().toISOString(),
        photoURL: currentUser.photoURL || null,
        displayName: currentUser.displayName || null,
        special: true,
      });
    }
  } catch (error) {
    console.error('부트스트랩 관리자 문서 확인/생성 오류:', error);
  }
};

const isAdmin = async (uid: string): Promise<boolean> => {
  if (uid === BOOTSTRAP_ADMIN_UID) {
    await ensureBootstrapAdminDocument();
    adminCache.set(uid, true);
    return true;
  }

  if (adminCache.has(uid)) return adminCache.get(uid) || false;

  try {
    const adminDoc = await getDoc(doc(db, 'admins', uid));
    const result = adminDoc.exists();
    adminCache.set(uid, result);
    return result;
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
};

export { auth, isAdmin };
