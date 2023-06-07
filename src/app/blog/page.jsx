import Link from 'next/link';
import Image from 'next/image';

import styles from './page.module.scss';

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data;
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => {
        const { id: _id, desc, title, image } = item;
        return (
          <Link key={id} href={`/blog/${encodeURIComponent(id)}`} className={styles.container}>
            <div className={styles.imageContainer}>
              <Image
                src={image}
                alt=''
                width={400}
                height={250}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.desc}>{desc}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Blog;
