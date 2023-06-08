'use client';
import Image from 'next/image';

import styles from './page.module.scss';
import Button from '@/components/button/Button';

export const metadata = {
  title: 'Esteem Designs | Contact Information',
  description: 'This is Contact page',
}

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src='/contact.png'
            alt=''
            fill={true}
            className={styles.image}
          />
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type='text' placeholder='name' className={styles.input} />
          <input type='text' placeholder='email' className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder='message'
            cols='30'
            rows='10'
          ></textarea>
          <Button url='#' text='send' />
        </form>
      </div>
    </div>
  );
}

export default Contact;
