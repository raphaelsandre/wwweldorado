'use client';
import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import CardItem from '../components/Card';

const busca = async ({ params }) => {
  const [produtos, setProdutos] = React.useState(null);
  const res = await fetch(`http://localhost:3000/api/search?${params.item}`, {
    cache: 'no-cache',
    method: 'GET'
  });
  console.log(res);
  return <div>oi</div>;
};

export default busca;
