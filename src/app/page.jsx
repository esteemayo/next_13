import Image from 'next/image';

import Hero from 'public/hero.png';
import styles from './page.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1>Better design for your digital products.</h1>
        <p>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <button type='button'>see our works</button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='' className={styles.img} />
      </div>
    </div>
  );
}

export default Home;
