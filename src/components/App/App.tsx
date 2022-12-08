import { Link, Route, Routes } from 'react-router-dom';
import { LinksWrapper, TitleWrapper, Wrapper } from './App.styled';

import { Cart } from '../Cart';
import { Products } from '../Products';
import { useState } from 'react';
import { Product } from '../../models';
import { CartContext } from '../../contexts/CartContext';
import { ProductContext } from '../../contexts/ProductContext';
import { shopData } from '../../data';

export const App = () => {

  const [products, setProducts] = useState(shopData);
  const [cartProducts, setCartProducts] = useState([] as Product[]);

  return (
    <Wrapper>
      <TitleWrapper>
        <h1>Clothing Shop Starter Project</h1>
      </TitleWrapper>
      <LinksWrapper>
        <Link to='/'>Home</Link>
        <Link to='/cart'>Cart</Link>
      </LinksWrapper>
      <CartContext.Provider value={{products : cartProducts, setProducts : setCartProducts}}>
        <ProductContext.Provider value={{products : products, setProducts : setProducts}}>
          <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          </Routes>
        </ProductContext.Provider>
      </CartContext.Provider>
    </Wrapper>
  );
};
