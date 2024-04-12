import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import styles from '../../styles/projects.module.css';
import Link from 'next/link';

const icon = (
  <Paper sx={{ width: '100%', height: '100%' }} elevation={4}>
    <img src="./josipastranica.avif" className={styles.image}></img>
  </Paper>
);

const secondicon = (
  <Paper sx={{ width: '100%', height: '100%' }} elevation={4}>
    <img src="./dbzstranica.avif" className={styles.image}></img>
  </Paper>
);

export default function SimpleGrow() {
  const [checked, setChecked] = React.useState(false);
  const ref = React.useRef(null);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setChecked(true);
        }
      },
      {
        rootMargin: '0px',
        threshold: 1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box sx={{ width: '70%' }}>
      <FormControlLabel
        sx={{
          ml: '46%',
          diplay: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Link
          ref={ref}
          href="https://www.josipabilic.com/"
          target="_blank"
          className={styles.hoverEffect}
        >
          <Grow
            in={checked}
            sx={{
              display: 'flex',
              boxShadow: 'none',
              backgroundColor: 'transparent',
              paddingTop: '4%',
              paddingRight: '4%',
            }}
          >
            {icon}
          </Grow>
        </Link>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Link
          ref={ref}
          href="https://dragon-ball-z-api.vercel.app/"
          target="_blank"
          className={styles.hoverEffect}
        >
          <Grow
            sx={{
              display: 'flex',
              boxShadow: 'none',
              backgroundColor: 'transparent',
              paddingTop: '4%',
              paddingLeft: '4%',
            }}
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
          >
            {secondicon}
          </Grow>
        </Link>
      </Box>
    </Box>
  );
}
