import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={styles.footer}>
      <div>&copy;{year} Esteem. All rights reserved.</div>
      <div className={styles.social}>
        <Image src='/1.png' width={15} height={15} className={styles.icon} alt='' />
        <Image src='/2.png' width={15} height={15} className={styles.icon} alt='' />
        <Image src='/3.png' width={15} height={15} className={styles.icon} alt='' />
        <Image src='/4.png' width={15} height={15} className={styles.icon} alt='' />
      </div>
    </footer>
  );
}

export default Footer;
