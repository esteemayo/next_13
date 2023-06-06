import Link from 'next/link';
import Image from 'next/image';

import styles from './page.module.scss';

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
        <div className={styles.imageContainer}>
          <Image
            src=''
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>{item.desc}</p>
        </div>
      </Link>
    </div>
  );
}

export default Blog;
