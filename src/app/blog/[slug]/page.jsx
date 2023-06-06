import Image from 'next/image';
import styles from './page.module.scss';

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adiposocing elit.</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsa debitis voluptatibus iure earum explicabo, facilis laboriosam eligendi repudiandae, temporibus distinctio delectus expedita dolore beatae dolorem accusamus et aliquid architecto?
          </p>
          <div className={styles.author}>
            <Image
              src='https://images.pexels.com/photos/12225910/pexels-photo-12225910.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
              width={40}
              height={40}
              alt=''
              className={styles.avatar}
            />
            <span className={styles.username}></span>
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
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores id eligendi explicabo ipsam iure aperiam aliquam mollitia voluptatem dicta, totam, expedita quae cum adipisci itaque suscipit ducimus. Veritatis, cum quasi?
          Libero facere esse rem magni, dignissimos sequi beatae. Ea, maiores accusamus dolor odio nobis quaerat fugit quia, maxime ipsum beatae odit. Quisquam animi officia repellat aliquid alias quos harum ex?
          Eveniet maxime blanditiis nam et sed ipsa placeat repellendus quis perspiciatis corporis? Explicabo harum nihil omnis alias amet quasi, voluptatibus pariatur numquam tempore debitis eveniet doloremque laborum corrupti accusamus quidem!
        </p>
      </div>
    </div>
  );
}

export default BlogPost;
