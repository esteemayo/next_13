import Link from 'next/link';
import { links } from '@/data';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav>
      <Link href='/' passHref>Esteem</Link>
      <div>
        {links.map((link) => {
          const { id, url, title } = link;
          return (
            <Link key={id} href={url} passHref>
              {title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
