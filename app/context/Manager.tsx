'use client';

import { supabase } from '@/supabase';
import Loading from '../loading';
import { createContext, useState, useContext, useEffect } from 'react';

export const ManagerContext = createContext([]);

export const ManagerProvider = ({ children }: any) => {
  const [searchValue, setSearchValue] = useState(null);
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [produtos, setProdutos] = useState(null);
  const [randomProdutos, setRandomProdutos] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    // setSearching(true);
    const { data, error } = await supabase
      .from('produtos')
      .select('*')
      .ilike('desc', `%${query}%`);

    if (query === '') {
      setSearching(false);
    }

    if (data) {
      setSearching(true);
      setSearchResults(data);
    }
    console.log(data);
  };

  useEffect(() => {
    const fetchProdutos = async () => {
      const { data, error } = await supabase
        .from('exclusivos')
        .select()
        .limit(4);

      if (error) {
        console.log(error);
        setLoading(true);
      }
      if (data) {
        setProdutos(data);
        setLoading(false);
      }
    };
    const fetchRandomProdutos = async () => {
      const { data, error } = await supabase
        .from('random_produtos')
        .select()
        .limit(100);

      if (error) {
        console.log(error);
        setLoading(true);
      }
      if (data) {
        setRandomProdutos(data);
        setLoading(false);
        console.log(data);
      }
    };
    fetchRandomProdutos();
    fetchProdutos();
  }, []);

  const autoCompleteProdutos = async (query: any) => {
    setSearchResults(null);
    setSearching(false);
    const { data, error } = await supabase
      .from('produtos')
      .select('*')
      .ilike('desc', `%${query}%`)
      .limit(10);

    if (error) {
      console.log(error);

      return;
    }
    if (data) {
      return;
    }
  };

  return (
    <ManagerContext.Provider
      value={{
        produtos,
        randomProdutos,
        loading,
        searchValue,
        searching,
        setSearchValue,
        setSearching,
        setLoading,
        autoCompleteProdutos,
        handleSearch,
        searchResults
      }}
    >
      {loading && <Loading />}
      {children}
    </ManagerContext.Provider>
  );
};

const useManager = () => useContext(ManagerContext);

export { useManager };
