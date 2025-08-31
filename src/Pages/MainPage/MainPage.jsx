import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import ProductList from '../../components/ProductList/ProductList';
import { useGetSushiQuery, useGetRollsQuery, useGetSaucesQuery, useGetSetsQuery, useGetSnacksQuery, useGetBaveragesQuery } from "../../Features/API/APISlice";

const MainPage = () => {
  const { data: sushi = [], isLoading: sushiLoading, error: sushiError } = useGetSushiQuery();
  const { data: rolls = [], isLoading: rollsLoading, error: rollsError } = useGetRollsQuery();
  const { data: sets = [], isLoading: setsLoading, error: setsError } = useGetSetsQuery();
  const { data: snacks = [], isLoading: snacksLoading, error: snacksError } = useGetSnacksQuery();
  const { data: baverages = [], isLoading: baveragesLoading, error: baveragesError } = useGetBaveragesQuery();
  const { data: sauces = [], isLoading: saucesLoading, error: saucesError } = useGetSaucesQuery();


  return (
    <>
      <Navbar />
      <Header />
      
      <ProductList 
        title="Суши" 
        data={sushi} 
        isLoading={sushiLoading} 
        error={sushiError} 
      />

      <ProductList 
        title="Роллы" 
        data={rolls} 
        isLoading={rollsLoading} 
        error={rollsError} 
      />

      <ProductList 
        title="Сеты" 
        data={sets} 
        isLoading={setsLoading} 
        error={setsError} 
      />

      <ProductList 
        title="Закуски" 
        data={snacks} 
        isLoading={snacksLoading} 
        error={snacksError} 
      />

      <ProductList 
        title="Напитки" 
        data={baverages} 
        isLoading={baveragesLoading} 
        error={baveragesError} 
      />
      <ProductList 
        title="Соусы" 
        data={sauces} 
        isLoading={saucesLoading} 
        error={saucesError} 
      />
    </>
  );
};

export default MainPage;
