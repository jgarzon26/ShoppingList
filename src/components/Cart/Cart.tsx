import { ProductsWrapper, Title } from './Cart.styled';
import { FC, useEffect, useState } from 'react';
import { Product } from '../../models';
import { ProductCard } from '../ProductCard';

interface productProps{
  products : Product[];
}

export const Cart : FC<productProps> = (props) : JSX.Element => {

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    props.products.forEach((product) => {
      total += product.price;
    });
    setTotalPrice(total);
  }, [props.products]);

  return (
    <>
      <Title>Your cart total is ${totalPrice}.00</Title>
      <ProductsWrapper>
        {props.products.map((data, index) => 
          <ProductCard key={index} {...data} />
        )}
      </ProductsWrapper>
    </>
  );
};
