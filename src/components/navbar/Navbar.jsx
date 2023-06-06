import Link from 'next/link';

import { links } from '@/data';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link href='/' passHref className={styles.logo}>Esteem</Link>
      <div className={styles.links}>
        {links.map((link) => {
          const { id, url, title } = link;
          return (
            <Link key={id} href={url} passHref className={styles.link}>
              {title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
