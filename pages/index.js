import styles from '../styles/Home.module.css';
import SimpleBottomNavigation from './ui/navigation';
import PlayButton from './ui/button';
import Contact from './ui/contact';

const Home = () => {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
      />
      <div className={styles['Main-Nav']}>
        <SimpleBottomNavigation></SimpleBottomNavigation>
      </div>
      <h1 className={styles['Main-Title']}>Hi, I'm Luka Bilić</h1>
      <div className={styles.pressMeButton}>
        <PlayButton></PlayButton>
      </div>
      <div className={styles.contactMe}>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
// #3e1720
