import Image from 'next/image';
import { notFound } from 'next/navigation';

import styles from './page.module.scss';

async function getData(slug) {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return notFound();
  }

  const data = await res.json();
  return data;
}

const BlogPost = async ({ params: { slug } }) => {
  const data = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={data.image}
              width={40}
              height={40}
              alt=''
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/12225910/pexels-photo-12225910.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            fill={true}
            alt=''
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
}

export default BlogPost;
