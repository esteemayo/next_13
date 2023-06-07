import Image from 'next/image';
import { notFound } from 'next/navigation';

import { items } from './data';
import Button from '@/components/button/Button';
import styles from './page.module.scss';

const getData = (category) => {
  const data = items[category];

  if (data) {
    return data;
  }

  return notFound();
}

const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) => {
        const { id, desc, title, image } = item;
        return (
          <div className={styles.item} key={id}>
            <div className={styles.content}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.desc}>{desc}</p>
              <Button text='See More' url='#' />
            </div>
            <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                fill={true}
                src={image}
                alt=''
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Category;
