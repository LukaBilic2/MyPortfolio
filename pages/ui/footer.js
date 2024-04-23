import Link from 'next/link';
import styles from '../../styles/footer.module.css';

const Footer = () => {
  return (
    <div className={styles.mainFooterWrapper}>
      <div className={styles.footerNameAndIcon}>
        <p>Luka Bilić</p>
        <Link className={styles.a} href="mailto:bilicluka1@gmail.com">bilicluka1@gmail.com</Link>
      </div>
      <div className={styles.footerEnd}>
        <p>All rights reserved @ 2024</p>
      </div>
    </div>
  );
};

export default Footer;
