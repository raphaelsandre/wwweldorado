'use client';
import InputBase from '@mui/material/InputBase';
import Image from 'next/image';
import Link from 'next/link';
import { useManager } from '../context/Manager';

import React from 'react';

const Navbar = () => {
  const { handleSearch, autoCompleteProdutos } = useManager();
  const inativo = 'mb-2';
  const ativo = 'bg-white text-emerald-900';

  return (
    <aside className='gap-3 flex flex-none  bg-emerald-900'>
      <nav className='flex flex-col mt-2 gap-1 text-base text-white font-bold'>
        <InputBase
          onChange={(e) => {
            autoCompleteProdutos(e.target.value);
          }}
          placeholder='Pesquisar'
          autoComplete='yes'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();

              handleSearch(e.target.value);
            }
          }}
          startAdornment={
            <span className='material-icons text-green-700 pr-2'>search</span>
          }
          className='h-9 text-green-900 rounded-sm mx-1 bg-slate-50'
        />
        <Link id='0' className={'mb-2 px-4'} href='/'>
          Inicio
        </Link>
        <Link className='mb-2 px-4' href='/' id='1'>
          Empresa
        </Link>
        <Link id='2' className='mb-2 px-4' href='/contato'>
          Contato
        </Link>
        <Link id='3' className='mb-2 px-4' href='/'>
          Sobre
        </Link>
      </nav>
    </aside>
  );
};

export default Navbar;
