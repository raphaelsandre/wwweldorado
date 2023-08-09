'use client';
import React from 'react';

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import {
  Menubar,
  MenubarMenu,
  MenubarContent
} from '../../@components/ui/menubar';
import { useTheme } from '@mui/material';
import { Navigation } from '../context/Navigation.jsx';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { HomeIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  // const theme = useTheme();
  // const spacing = theme.spacing({});
  // const sm = theme.breakpoints.up('sm');

  return (
    <div className='w-full right-0 relative top-0 left-0 sm:w-1/5 flex flex-col'>
      <div className='items-center w=full mr-100'>
        <Image
          src='/logo.png'
          width={100}
          height={100}
          alt='logo'
        />
      </div>
      <ul>{/* <Navigation /> */}</ul>
    </div>
  );
};

export default Sidebar;
