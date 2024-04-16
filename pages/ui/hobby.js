import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styles from '../../styles/hobby.module.css';

const StandardImageList = () => {
  return (
    <div className={styles.imagesWrapper}>
      <div className={styles.imageTitleContainer}>
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

      <div className={styles.imageTitleContainer}>
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

      <div className={styles.imageTitleContainer}>
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
