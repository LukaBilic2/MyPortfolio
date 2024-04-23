import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styles from '../../styles/hobby.module.css';

const StandardImageList = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={styles.imagesWrapper}>
      <Backdrop
        sx={{ color: 'white', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
        className={styles.backdropFont}
      >
        Active: <br />
        Running, karting and football are my go to for health benefits, cardio
        and fun! <br /> <br />
        Learning: <br /> Coding, audiobooks and gaming are my go to for
        improving my cognitive abilities and problem-solving.
        <br />
        <br /> Childhood: <br /> Yu-Gi-Oh and Dragon Ball are my favourite shows
        from my childhood. Once a year I go back and visit my childhood
        memories.
      </Backdrop>

      <div className={styles.imageTitleContainer} onClick={handleOpen}>
        <h2>Active</h2>
        <ImageList
          sx={{
            width: '32vw',
            height: '100%',
            padding: '5%',
          }}
          cols={3}
          rowHeight={200}
          className={styles.imagesContainer}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                className={styles.hobbyImage}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>

      <div className={styles.imageTitleContainer} onClick={handleOpen}>
        <h2>Learning</h2>
        <ImageList
          sx={{
            width: '32vw',
            height: '100%',
            padding: '5%',
          }}
          cols={3}
          rowHeight={200}
          className={styles.imagesContainer}
        >
          {itemDataTwo.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                className={styles.hobbyImage}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>

      <div className={styles.imageTitleContainer} onClick={handleOpen}>
        <h2>Childhood</h2>

        <ImageList
          sx={{
            width: '32vw',
            height: '100%',
            padding: '5%',
          }}
          cols={2}
          rowHeight={200}
          className={styles.imagesContainer}
        >
          {itemDataThree.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                className={styles.hobbyImage}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
};

const itemData = [
  {
    img: '/imageRunning.avif',
    title: 'Running',
  },
  {
    img: 'imageKarting.avif',
    title: 'Karting',
  },
  {
    img: 'imageFootball.avif',
    title: 'Football',
  },
];

const itemDataTwo = [
  {
    img: '/imageCoding.avif',
    title: 'Coding',
  },
  {
    img: 'imageAudioBook.avif',
    title: 'AudioBook',
  },
  {
    img: 'imageGaming.avif',
    title: 'Gaming',
  },
];

const itemDataThree = [
  {
    img: '/imageYuGiOh.avif',
    title: 'YuGiOh',
  },
  {
    img: 'imageGoku.avif',
    title: 'Goku',
  },
];

export default StandardImageList;
