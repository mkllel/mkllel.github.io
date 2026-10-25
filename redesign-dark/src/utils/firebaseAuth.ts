import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { app, db } from './firebase';

const BOOTSTRAP_ADMIN_UID = 'KtZLKuzl56QzPLiFVRVfovWVapz2';
// 화면마다 같은 UID를 재조회하지 않도록 결과를 모듈에 보관한다. 실제 데이터 권한은 Firebase 규칙이 판단한다.
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
  // 최초 관리자는 admins 문서가 없어도 진입할 수 있어야 하며, 문서 생성 권한은 Firestore 규칙에도 필요하다.
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
