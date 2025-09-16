import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import ProductList from '../../components/ProductList/ProductList';
import { useGetSushiQuery, useGetRollsQuery, useGetSaucesQuery, useGetSetsQuery, useGetSnacksQuery, useGetBeveragesQuery } from "../../Features/API/APISlice";
import PromoSlider from '../../components/PromoBanner/PromoSlider';
import Map from './Map/Map';
import Footer from '../../components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import HeaderSlider from '../../components/Header/HeaderSlider';

const   MainPage = () => {
  const { data: sushi = [], isLoading: sushiLoading, error: sushiError } = useGetSushiQuery();
  const { data: rolls = [], isLoading: rollsLoading, error: rollsError } = useGetRollsQuery();
  const { data: sets = [], isLoading: setsLoading, error: setsError } = useGetSetsQuery();
  const { data: snacks = [], isLoading: snacksLoading, error: snacksError } = useGetSnacksQuery();
  const { data: beverages = [], isLoading: baveragesLoading, error: baveragesError } = useGetBeveragesQuery();
  const { data: sauces = [], isLoading: saucesLoading, error: saucesError } = useGetSaucesQuery();


  return (
    <>
   
      <HeaderSlider/>
      
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

      <PromoSlider/>

      <ProductList 
        title="Закуски" 
        data={snacks} 
        isLoading={snacksLoading} 
        error={snacksError} 
      />

      <ProductList 
        title="Напитки" 
        data={beverages} 
        isLoading={baveragesLoading} 
        error={baveragesError} 
      />
      {/* <ProductList 
        title="Соусы" 
        data={sauces} 
        isLoading={saucesLoading} 
        error={saucesError} 
      /> */}

      <Map/>
    
    </>
  );
};

export default MainPage;
