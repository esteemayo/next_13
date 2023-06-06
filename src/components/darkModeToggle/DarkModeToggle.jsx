import styles from './DarkModeToggle.scss';

const DarkModeToggle = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div className={styles.ball} />
    </div>
  );
}

export default DarkModeToggle;
