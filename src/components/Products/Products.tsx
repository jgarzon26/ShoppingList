import { ProductsWrapper, Title } from './Products.styled';

import { ProductActionTypes, ProductCard } from '../ProductCard';
import { shopData } from '../../data';

import { useContext, useEffect, useState } from 'react';
import { Product } from '../../models';
import { ProductContext } from '../../contexts/ProductContext';


export const Products = () => {

  let productsContext = useContext(ProductContext);

  return (
    <>
      <Title>Welcome to the Clothing Shop</Title>
      <ProductsWrapper>
        {productsContext.products.map((data, index) => (
          <ProductCard key={index} {...data} isInCart = {false} />
        ))}
      </ProductsWrapper>
    </>
  );
};
