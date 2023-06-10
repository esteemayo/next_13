'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';

import styles from './page.module.scss';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

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
