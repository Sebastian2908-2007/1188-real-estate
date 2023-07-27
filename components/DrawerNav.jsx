'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
//import ListItemText from '@mui/material/ListItemText';
/*process icon */
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
/**reviews icon */
import ReviewsIcon from '@mui/icons-material/Reviews';
/**about */
import InfoIcon from '@mui/icons-material/Info';
/**sell now */
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/relogo (1).png';

const iconListITemStyle = {
  '@media(min-width: 540px)' : {
    fontSize: '2rem'
  }
};

export default function DrawerNav() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
    className='
     bg-gradient-to-l from-sitelteblu to-sitedrkblu
     flex
     flex-row min-[540px]:justify-between
     '
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem className='min-[540px]:mb-2' disablePadding>
            <ListItemButton>
              <ListItemIcon className='text-sitegrn mr-0' >
                <DeveloperBoardIcon sx={iconListITemStyle}/>
              </ListItemIcon>
              <Link href='/process'>
              <span className=' text-sm text-sitegrn min-[540px]:text-xl'>process</span>
                </Link>
            </ListItemButton>
          </ListItem>

          <ListItem className='min-[540px]:mb-2' disablePadding>
            <ListItemButton>
              <ListItemIcon className='text-sitegrn mr-0'>
                <ReviewsIcon sx={iconListITemStyle}/>
              </ListItemIcon>
              <Link href='/qualify'>
              <span className=' text-sm text-sitegrn min-[540px]:text-xl'>Qualify</span>
                </Link>
            </ListItemButton>
          </ListItem>

          <ListItem className='min-[540px]:mb-2' disablePadding>
            <ListItemButton>
              <ListItemIcon className='text-sitegrn mr-0'>
                <InfoIcon sx={iconListITemStyle}/>
              </ListItemIcon>
              <Link href='/about'>
              <span className=' text-sm text-sitegrn min-[540px]:text-xl'>About</span>
                </Link>
            </ListItemButton>
          </ListItem>

          <ListItem className='min-[540px]:mb-2' disablePadding>
            <ListItemButton >
              <ListItemIcon className='text-sitegrn mr-0'>
                <AttachMoneyIcon sx={iconListITemStyle}/>
              </ListItemIcon>
              <Link href='/sellnow'>
              <span className=' text-xs text-sitegrn min-[540px]:text-xl'>Sell Now</span>
                </Link>
            </ListItemButton>
          </ListItem>  
      </List>
    <List>
    <div className='p-2 w-100 h-fit'>
      <Link href='/'>
            <Image
            className="logo-drawer"
            src={logo}
            alt="2908 realestate logo"
            />
        </Link>
        </div>
    </List>
   
    </Box>
  );

  return (
    <div className='flex flex-col place-content-center'>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className='text-sitegrn text-lg' onClick={toggleDrawer(anchor, true)}>
            <MenuIcon className='text-4xl'/>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}