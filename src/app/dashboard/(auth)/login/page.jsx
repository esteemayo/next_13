'use client';

import { signIn } from 'next-auth/react';
import styles from './page.module.scss';

const Login = () => {
  return (
    <div className={styles.container}>
      <button type='button' onClick={() => signIn('google')}>
        Login with Google
      </button>
    </div>
  );
}

export default Login;
