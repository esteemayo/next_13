'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';

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
      <h1 className={styles.title}>{success ? success : 'Welcome Back'}</h1>
      <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>
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
      <Link className={styles.link} href='/dashboard/register' passHref>
        Create new account
      </Link>
    </div>
  );
}

export default Login;
