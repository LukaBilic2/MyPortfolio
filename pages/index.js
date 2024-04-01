import styles from '../styles/Home.module.css';
import NavLinks from './ui/nav-links';

const Home = () => {
  return (
    <div>
      <NavLinks />
      <h1 className={styles['Main-Title']}>Hi, I'm Luka Bilić</h1>
    </div>
  );
};

export default Home;
