import { CheckoutPane, ProductsWrapper, Title } from './Cart.styled';
import { useContext, useEffect, useState } from 'react';
import { ProductCard } from '../ProductCard';
import { CartContext } from '../../contexts/CartContext';

export const Cart = () => {

  const [totalPrice, setTotalPrice] = useState(0);

  const products = useContext(CartContext)

  useEffect(() => {
    let total = 0;
    products.products.forEach((product) => {
      total += product.price * product.quantity;
    });
    setTotalPrice(total);
  }, [products]);

  return (
    <>
      <Title>Your cart total is ${totalPrice}.00</Title>
      <ProductsWrapper>
        {products.products.map((data, index) => 
          <ProductCard key={index} {...data} isInCart = {true} isInWishlist = {false} />
        )}
      </ProductsWrapper>
      <CheckoutPane onClick={() => {
        alert('You have successfully checked out!');
        products.setProducts([]);
      }}>
        Checkout
      </CheckoutPane>
    </>
  );
};
