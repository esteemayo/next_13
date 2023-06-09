'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import styles from './page.module.scss';

const Register = () => {
  const { push } = useRouter();
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const username = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;
    const confirmPassword = e.target[3].value;

    const newUser = {
      name,
      username,
      email,
      password,
      confirmPassword,
    };

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'appliaction/json',
        },
        body: JSON.stringify(newUser),
      });

      res.status === 201 &&
        push('/dashboard/login?success=Account has been created');
    } catch (err) {
      setError(true);
    }
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
          type='email'
          placeholder='Email'
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
          type='password'
          placeholder='Password'
          required
          className={styles.input}
        />
        <input
          type='password'
          placeholder='Confirm Password'
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
