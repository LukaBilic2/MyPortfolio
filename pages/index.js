import styles from '../styles/Home.module.css';
import SimpleBottomNavigation from './ui/navigation';
import PlayButton from './ui/button';
import Contact from './ui/contact';
import BackgroundGradient from './ui/backgroundGradient';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import Card from './ui/card';

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

      <BackgroundGradient>
        <div className={styles['Main-Nav']}>
          <SimpleBottomNavigation></SimpleBottomNavigation>
          <div className={styles.phoneNumberContainer}>
            <CallOutlinedIcon className={styles.phoneIcon} />
            <p>+385 0995997139</p>
          </div>
        </div>

        <div className={styles['main-Container-Wrapper']}>
          <div className={styles.mainContainer}>
            <h2 className={styles['hi-Title']}>Hi,</h2>
            <h1 className={styles['Main-Title']}>I'm Luka Bilić</h1>
            <h2>Front-End React Developer</h2>
          </div>

          <div className={styles.welcomeButtonContainer}>
            <PlayButton></PlayButton>
          </div>
        </div>
        <section className={styles.aboutContainer}>
          <h2 className={styles.aboutMeTitle}>About me</h2>

          <p className={styles.aboutMeText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p>Age: 22</p>
          <p>Email: bilicluka1@gmail.com</p>
          <p>Phone: +385-099-599-7139</p>
          <p>From: Croatia - Stupnik</p>
          <p>Language: Croatian (Native), English (B2)</p>

          <div className={styles.cardsContainer}>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>

        {/* <div className={styles.contactMe}>
          <Contact></Contact>
        </div> */}
      </BackgroundGradient>
    </div>
  );
};

export default Home;
// #3e1720
