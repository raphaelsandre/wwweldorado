'use client';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Image from 'next/image';
import { Container } from '@mui/material';
import { useState } from 'react';
// import './components-styles.css';

const CardItem = ({ produto }) => {
  const [src, setSrc] = useState('/assets/' + produto.codigo + '.jpg');
  const placeholderImage = '/placeholder.png';
  const imageError = (e) => {
    e.target.error = null;
    e.target.src = placeholderImage;
  };
  return (
    <div
      className='p-0 m-2 items-center flex-grow border-2 border-white bg-white 
'
    >
      <div className='h-14 my-2'>
        <p className='break-words capitalize flex text-center text-emerald-900 text-sm sm:text-base'>
          {produto.desc.toLowerCase()}
        </p>
      </div>
      <div className='flex flex-col items-center mb-1 justify-center object-contain bg-white'>
        <Image
          // src={'/assets/' + produto.codigo + '.jpg'}
          src={src}
          className='flex flex-1 bg-opacity-20 bg-clip-content bg-clip'
          alt='prod'
          width={200}
          onError={() => setSrc('/placeholder.png')}
          height={200}
          blurDataURL='/placeholder.png'
          placeholder='blur'
          // backgroundImage='url(/assets/1.jpg)'
          // style={{
          //   backgroundImage: 'url(/placeholder.png)',
          //   backgroundSize: 'cover'
          // }}
        />
        <p className='text-xs text-end w-full pr-2 from-neutral-400 text-gray-600'>
          {produto.codigo}
        </p>
      </div>
      <div className='  text-center border-t-2 h-10'>
        <p className=' text-emerald-900 pt-0 pb-0 text-center h-full mb-0 whitespace-normal px-2 capitalize text-xs'>
          {produto.fornecedor.toLowerCase()}
        </p>
      </div>
    </div>
  );
};
export default CardItem;
