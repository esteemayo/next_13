import Link from 'next/link';
import Image from 'next/image';

import styles from './page.module.scss';

async function getData() {
  const res = await fetch('http://jsonplaceholder.typicode.com/posts', {
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
        const { id, body, title } = item;
        return (
          <Link key={id} href={`/blog/${encodeURIComponent(id)}`} className={styles.container}>
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
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.desc}>{body}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Blog;
