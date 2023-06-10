'use client';

import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { useState } from 'react';
import Link from 'next/link';

import styles from './page.module.scss';

const Login = () => {
  const router = useRouter();
  const params = useSearchParams();
  const session = useSession();

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    const credentials = {
      email,
      password,
    };

    signIn('credentials', { ...credentials });
  };

  useEffect(() => {
    setError(params.get('error'));
    setSuccess(params.get('success'));
  }, [params]);

  if (session.status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session.status === 'authenticated') {
    return router?.push('/dashboard');
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type='email'
          placeholder='Email'
          required
          className={styles.input}
        />
        <input
          type='password'
          placeholder='Password'
          required
          className={styles.input}
        />
        <button type='submit' className={styles.button}>Login</button>
        {error && error}
      </form>
      <button
        type='button'
        className={styles.button + ' ' + styles.google}
        onClick={() => signIn('google')}
      >
        Login with Google
      </button>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href='/dashboard/register'>
        Create new account
      </Link>
    </div>
  );
}

export default Login;
