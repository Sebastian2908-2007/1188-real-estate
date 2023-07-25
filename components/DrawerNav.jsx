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
import ListItemText from '@mui/material/ListItemText';
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
import logo from '../public/relogo (5).png';
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
    className='bg-gradient-to-l from-sitelteblu to-sitedrkblu'
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon className='text-sitegrn'>
                <DeveloperBoardIcon/>
              </ListItemIcon>
              <Link href='/process'>
              <ListItemText className='text-sitegrn' primary={'process'}/>
                </Link>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon className='text-sitegrn'>
                <ReviewsIcon/>
              </ListItemIcon>
              <Link href='/process'>
              <ListItemText className='text-sitegrn' primary={'Reviews'}/>
                </Link>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon className='text-sitegrn'>
                <InfoIcon/>
              </ListItemIcon>
              <Link href='/process'>
              <ListItemText className='text-sitegrn' primary={'About'}/>
                </Link>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon className='text-sitegrn'>
                <AttachMoneyIcon/>
              </ListItemIcon>
              <Link href='/process'>
              <ListItemText className='text-sitegrn' primary={'Sell now'}/>
                </Link>
            </ListItemButton>
          </ListItem>  
      </List>
      <Divider />
   
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
             <div className='flex flex-row bg-gradient-to-r from-sitelteblu to-sitedrkblu '>
            {list(anchor)}
            <Image
            className="logo-drawer"
            src={logo}
            alt="2908 realestate logo"
            />
        </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}