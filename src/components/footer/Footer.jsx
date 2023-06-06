import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>&copy;2023 Esteem. All rights reserved.</div>
      <div>
        <div className={styles.imgContainer}>
          <Image src='/1.png' width={15} height={15} alt='' />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
