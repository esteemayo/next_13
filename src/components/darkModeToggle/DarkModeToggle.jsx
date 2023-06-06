'use client';

import styles from './DarkModeToggle.module.scss';
import { useThemeGlobalContext } from '@/context/ThemeContext';

const DarkModeToggle = () => {
  const { mode, toggle } = useThemeGlobalContext();

  return (
    <div className={styles.container} onClick={() => toggle()}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === 'light' ? { left: '2px' } : { right: '2px' }}
      />
    </div>
  );
}

export default DarkModeToggle;
