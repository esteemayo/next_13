'use client';

import Link from 'next/link';
import { useState } from 'react';

import styles from './page.module.scss';

const Register = () => {
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type='text'
          placeholder='Name'
          required
          className={styles.input}
        />
        <input
          type='text'
          placeholder='Username'
          required
          className={styles.input}
        />
        <input
          type='text'
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
        <button type='submit' className={styles.button}>Register</button>
        {error && 'Something went wrong!'}
      </form>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href='/dashboard/login'>
        Login with an existing account
      </Link>
    </div>
  );
}

export default Register;
