import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';

export const aboutRef = React.createRef();
export const projectsRef = React.createRef();
export const hobbiesRef = React.createRef();

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(null);

  return (
    <Box
      sx={{
        width: '26%',
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
          borderBottom: '1px solid white',
          zIndex: 1,
          '& :hover': {
            backgroundColor: '#756565',
            transition: '0.4s',
          },
          backgroundColor: 'transparent',
          '& .Mui-selected': {
            '& svg': {
              color: 'white',
            },
            color: 'white',
            backgroundColor: 'var(--main-color)',
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
          id="scrollButton"
          onClick={() =>
            aboutRef.current.scrollIntoView({ behavior: 'smooth' })
          }
        />
        <BottomNavigationAction
          sx={{ color: 'white' }}
          label="Projects"
          icon={<DesktopWindowsOutlinedIcon />}
          id="scrollProject"
          onClick={() =>
            projectsRef.current.scrollIntoView({ behavior: 'smooth' })
          }
        />
        <BottomNavigationAction
          sx={{ color: 'white' }}
          label="Hobbies"
          icon={<SportsSoccerOutlinedIcon />}
          onClick={() =>
            hobbiesRef.current.scrollIntoView({ behavior: 'auto' })
          }
        />
      </BottomNavigation>
    </Box>
  );
}
