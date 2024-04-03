import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        width: '100%',
        '& :hover': {
          backgroundColor: '#461d25',
          transition: '0.5s',
        },
        '& :not(:hover)': {
          transition: '0.5s',
        },
      }}
    >
      <BottomNavigation
        sx={{
          zIndex: 1,
          '& :hover': {
            backgroundColor: '#756565',
            transition: '0.4s',
          },
          backgroundColor: '#3e1720',
          '& .Mui-selected': {
            '& svg': {
              color: 'white',
            },
            color: 'white',
            backgroundColor: '#0c0a0b',
            transition: 'background-color 0.5s ease',
          },
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          sx={{ color: 'white' }}
          label="About"
          icon={<AccountCircleOutlinedIcon />}
        />
        <BottomNavigationAction
          sx={{ color: 'white' }}
          label="Projects"
          icon={<DesktopWindowsOutlinedIcon />}
        />
        <BottomNavigationAction
          sx={{ color: 'white' }}
          label="Hobby"
          icon={<SportsSoccerOutlinedIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
