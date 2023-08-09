'use client';
import { useEffect, useState } from 'react';
import CardItem from './components/Card';
import { supabase } from '@/supabase';
import Loading from './loading';
import { useManager } from './context/Manager';

export default function Home() {
  const {
    autoCompleteProdutos,
    produtos,
    randomProdutos,
    loading,
    searchValue,
    searching,
    searchResults
  } = useManager();

  useEffect(() => {}, [searching]);

  return (
    <main className='bg-white justify-center p-0.5'>
      <section className='flex justify-center'>
        {loading && <Loading />}

        {searching && searchResults && (
          <div className='flex flex-wrap items-center'>
            <div>Exclusivos</div>
            <div className='flex flex-wrap justify-center gap-2'>
              {searchResults.map((produto) => (
                <CardItem
                  key={produto.codigo}
                  produto={produto}
                />
              ))}
            </div>
          </div>
        )}
        {randomProdutos && !searching && (
          <div className='flex flex-col w-full items-center'>
            <p>Mix</p>

            <div className='flex w-full justify-center animate-in flex-wrap'>
              {randomProdutos.map((produto) => (
                <CardItem
                  key={produto.codigo}
                  produto={produto}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
