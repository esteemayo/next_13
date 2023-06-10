'use client';

import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import styles from './page.module.scss';
import Image from 'next/image';

const Dashboard = () => {
  const router = useRouter();
  const session = useSession();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher,
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    const newPost = {
      title,
      desc,
      image,
      content,
      username: session.data.user.name,
    };

    try {
      await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...newPost }),
      });

      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (postId) => {
    try {
      await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session.status === 'unauthenticated') {
    return router?.push('/dashboard/login');
  }

  if (session.status === 'authenticated') {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? 'loading'
            : data.map((post) => {
              const { _id: id, title, image } = post;
              return (
                <div className={styles.post} key={id}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={image}
                      alt=''
                      width={200}
                      height={100}
                      className={styles.img}
                    />
                  </div>
                  <h2 className={styles.postTitle}>{title}</h2>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(id)}
                  >
                    X
                  </span>
                </div>
              );
            })}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type='text' placeholder='Title' className={styles.input} />
          <input type='text' placeholder='Desc' className={styles.input} />
          <input type='text' placeholder='Image' className={styles.input} />
          <textarea
            placeholder='Content'
            className={styles.textArea}
            cols='30'
            rows='10'
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
}

export default Dashboard;
