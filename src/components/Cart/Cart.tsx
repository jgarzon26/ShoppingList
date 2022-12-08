import { ProductsWrapper, Title } from './Cart.styled';
import { FC, useContext, useEffect, useState } from 'react';
import { Product } from '../../models';
import { ProductCard } from '../ProductCard';
import { ProductsContext } from '../../contexts/productsContext';

export const Cart = () => {

  const [totalPrice, setTotalPrice] = useState(0);

  const products = useContext(ProductsContext)

  useEffect(() => {
    let total = 0;
    products.products.forEach((product) => {
      total += product.price;
    });
    setTotalPrice(total);
  }, [products]);

  return (
    <>
      <Title>Your cart total is ${totalPrice}.00</Title>
      <ProductsWrapper>
        {products.products.map((data, index) => 
          <ProductCard key={index} {...data} isInCart = {true} />
        )}
      </ProductsWrapper>
    </>
  );
};
