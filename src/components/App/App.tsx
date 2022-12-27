import { Link, Route, Routes } from 'react-router-dom';
import { LinksWrapper, TitleWrapper, Wrapper } from './App.styled';

import { Cart } from '../Cart';
import { Products } from '../Products';
import { useState } from 'react';
import { Product } from '../../models';
import { CartContext } from '../../contexts/CartContext';
import { ProductContext } from '../../contexts/ProductContext';
import { shopData } from '../../data';
import { Wishlist } from '../Wishlist/Wishlist';
import { WishlistContext } from '../../contexts/WishlistContext';

export const App = () => {

  const [products, setProducts] = useState(shopData);
  const [cartProducts, setCartProducts] = useState([] as Product[]);
  const [wishlistProducts, setWishlistProducts] = useState([] as Product[]);

  return (
    <Wrapper>
      <TitleWrapper>
        <h1>Clothing Shop Starter Project</h1>
      </TitleWrapper>
      <LinksWrapper>
        <Link to='/'>Home</Link>
        <Link to='/wishlist'>Wishlist</Link>
        <Link to='/cart'>Cart</Link>
      </LinksWrapper>
      <CartContext.Provider value={{products : cartProducts, setProducts : setCartProducts}}>
        <WishlistContext.Provider value={{products : [], setProducts : setWishlistProducts}}>
          <ProductContext.Provider value={{products : products, setProducts : setProducts}}>
            <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/cart' element={<Cart />} />
            </Routes>
          </ProductContext.Provider>
        </WishlistContext.Provider>
      </CartContext.Provider>
    </Wrapper>
  );
};
