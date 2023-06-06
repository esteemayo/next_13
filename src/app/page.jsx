import Image from 'next/image';

import Hero from 'public/hero.png';
import styles from './page.module.scss';
import Button from '@/components/button/Button';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <button type='button' className={styles.button}>see our works</button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='' className={styles.img} />
      </div>
    </div>
  );
}

export default Home;
