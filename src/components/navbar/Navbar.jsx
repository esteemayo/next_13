'use client';

import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

import { links } from '@/data';
import DarkModeToggle from '../darkModeToggle/DarkModeToggle';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const session = useSession();

  return (
    <nav className={styles.container}>
      <Link href='/' passHref className={styles.logo}>
        Esteem
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => {
          const { id, url, title } = link;
          return (
            <Link key={id} href={url} passHref className={styles.link}>
              {title}
            </Link>
          );
        })}
        {session.status === 'authenticated' && (
          <button
            type='button'
            className={styles.logout}
            onClick={signOut}
          >
            logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
