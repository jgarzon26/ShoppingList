import { Link, Route, Routes } from 'react-router-dom';
import { LinksWrapper, TitleWrapper, Wrapper } from './App.styled';

import { Cart } from '../Cart';
import { Products } from '../Products';
import { createContext } from 'react';
import { Product } from '../../models';

export const ProductsContext  = createContext<Product[]>([]);

export const App = () => {

  return (
    <Wrapper>
      <TitleWrapper>
        <h1>Clothing Shop Starter Project</h1>
      </TitleWrapper>
      <LinksWrapper>
        <Link to='/'>Home</Link>
        <Link to='/cart'>Cart</Link>
      </LinksWrapper>
      <ProductsContext.Provider value={[]}>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </ProductsContext.Provider>
    </Wrapper>
  );
};
