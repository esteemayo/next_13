import Link from 'next/link';
import Image from 'next/image';

import styles from './page.module.scss';

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href='/blog/testId' className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/12225910/pexels-photo-12225910.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>description</p>
        </div>
      </Link>
      <Link href='/blog/testId' className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/12225910/pexels-photo-12225910.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>description</p>
        </div>
      </Link>
      <Link href='/blog/testId' className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/12225910/pexels-photo-12225910.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>description</p>
        </div>
      </Link>
    </div>
  );
}

export default Blog;
