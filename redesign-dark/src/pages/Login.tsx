import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth, isAdmin } from '../utils/firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      const credential = await signInWithEmailAndPassword(auth, email, password);
      if (!await isAdmin(credential.user.uid)) {
        await signOut(auth);
        setError('관리자 계정으로 인증할 수 없습니다.');
        return;
      }
      navigate('/admin', { replace: true });
    } catch (authError) {
      console.error('관리자 인증 오류:', authError);
      setError('이메일 또는 비밀번호를 확인해주세요.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);

    try {
      const credential = await signInWithPopup(auth, new GoogleAuthProvider());
      if (!await isAdmin(credential.user.uid)) {
        await signOut(auth);
        setError('관리자 계정으로 인증할 수 없습니다.');
        return;
      }
      navigate('/admin', { replace: true });
    } catch (authError) {
      console.error('Google 관리자 인증 오류:', authError);
      setError('Google 로그인에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-shell">
      <section className="admin-login-panel" aria-labelledby="admin-login-title">
        <p className="eyebrow">PRIVATE ADMIN</p>
        <h1 id="admin-login-title">관리자 인증</h1>
        {error && <p className="admin-login-error" role="alert">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="admin-email">이메일</label>
          <input id="admin-email" type="email" autoComplete="username" required value={email} onChange={(event) => setEmail(event.target.value)} />
          <label htmlFor="admin-password">비밀번호</label>
          <input id="admin-password" type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} />
          <button className="button button--primary" type="submit" disabled={loading}>{loading ? '확인 중…' : '로그인'}</button>
        </form>
        <div className="admin-login-divider"><span>또는</span></div>
        <button className="button admin-google-button" type="button" disabled={loading} onClick={handleGoogleLogin}>
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.4-.18-2.07H12v3.91h5.38a4.6 4.6 0 0 1-2 3.02v2.54h3.24c1.9-1.75 2.98-4.33 2.98-7.4Z" />
            <path fill="#34A853" d="M12 22c2.7 0 4.98-.9 6.63-2.37l-3.25-2.54c-.9.6-2.05.96-3.38.96-2.61 0-4.82-1.77-5.61-4.15H3.04v2.62A10 10 0 0 0 12 22Z" />
            <path fill="#FBBC05" d="M6.39 13.9A6 6 0 0 1 6.08 12c0-.66.11-1.3.31-1.9V7.48H3.04A10 10 0 0 0 2 12c0 1.61.38 3.14 1.04 4.52l3.35-2.62Z" />
            <path fill="#EA4335" d="M12 5.95c1.47 0 2.79.5 3.83 1.5l2.87-2.88A9.63 9.63 0 0 0 12 2a10 10 0 0 0-8.96 5.48l3.35 2.62C7.18 7.72 9.39 5.95 12 5.95Z" />
          </svg>
          Google로 로그인
        </button>
      </section>
    </div>
  );
};

export default Login;
