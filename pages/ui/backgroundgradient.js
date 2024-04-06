import styles from '../../styles/background.module.css';

const BackgroundGradient = ({ children }) => {
  return <div className={styles.gradient}>{children}</div>;
};

export default BackgroundGradient;
