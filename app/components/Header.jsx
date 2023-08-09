'use client';
import { supabase } from '@/supabase';
import { InputBase } from '@mui/material';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useManager } from '../context/Manager';
import AutoComplete from './input/index';

const Header = () => {
  const {
    searchValue,
    setSearchValue,
    autoCompleteProdutos,
    setSearching,
    handleSearch
  } = useManager();
  const router = useRouter();
  const [value, setValue] = React.useState(null);

  return (
    <header className='flex flex-none p-1 w-full'>
      <div className='flex p-2 m-1'>
        <Link href='/'>
          <Image
            src='/logo.png'
            alt='logo'
            width={140}
            height={140}
          />
        </Link>
      </div>
      <div className='flex flex-grow justify-end items-end px-2'>
        {/* <AutoComplete onChange={(e) => autoCompleteProdutos(e.target.value)} /> */}
      </div>
    </header>
  );
};

export default Header;
