'use client';

import { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';

import styles from './page.module.scss';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const session = useSession();
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    const credentials = {
      email,
      password,
    };

    signIn('credentials', { ...credentials });
    router.push('/dashboard');
  };

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
        {error && 'Something went wrong!'}
      </form>
      <button type='button' onClick={() => signIn('google')}>
        Login with Google
      </button>
    </div>
  );
}

export default Login;
