import Link from 'next/link';
import { links } from '@/data';

const Navbar = () => {
  return (
    <nav>
      <Link href='/' passHref>Esteem</Link>
    </nav>
  );
}

export default Navbar;
