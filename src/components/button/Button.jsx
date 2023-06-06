import Link from 'next/link';
import styles from './Button.module.scss';

const Button = ({ url, text }) => {
  return (
    <Link href={url} passHref>
      <button type='button' className={styles.container}>
        {text}
      </button>
    </Link>
  );
}

export default Button;
