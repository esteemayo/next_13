import Link from 'next/link';
import styles from './page.module.scss';

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href='/portfolio/illustrations' passHref className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href='/portfolio/websites' passHref className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href='/portfolio/applications' passHref className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
      </div>
    </div>
  );
}

export default Portfolio;
