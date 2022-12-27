import { ProductsWrapper, Title } from './Products.styled';

import { ProductCard } from '../ProductCard';

import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';


export const Products = () => {

  let productsContext = useContext(ProductContext);

  return (
    <>
      <Title>Welcome to the Clothing Shop</Title>
      <ProductsWrapper>
        {productsContext.products.map((data, index) => (
          <ProductCard key={index} {...data} isInCart = {false} isInWishlist = {false} />
        ))}
      </ProductsWrapper>
    </>
  );
};
