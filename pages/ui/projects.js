import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import styles from '../../styles/projects.module.css';

const icon = (
  <Paper sx={{ m: 2, width: '100%', height: '100%' }} elevation={4}>
    <img src="./josipastranica.avif" className={styles.image}></img>
  </Paper>
);

export default function SimpleGrow() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

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
        <Grow in={checked}>{icon}</Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          {icon}
        </Grow>
      </Box>
    </Box>
  );
}
