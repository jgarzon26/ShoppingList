import { ProductsWrapper, Title } from './Products.styled';

import { ProductActionTypes, ProductCard } from '../ProductCard';
import { shopData } from '../../data';

import { useContext, useEffect, useState } from 'react';
import { Product } from '../../models';
import { ProductContext } from '../../contexts/ProductContext';


export const Products = () => {

  const [products, setProducts] = useState(
    shopData.map((data, index) => (
      <ProductCard key={index} {...data} isInCart = {false} />
    ))
  );

  const editProductsArray = (action : ProductActionTypes, id : number) => {
    switch (action) {
      case ProductActionTypes.Remove:
        setProducts(products.filter((product) => product.props.id != id));
    }
  }

  return (
    <>
      <Title>Welcome to the Clothing Shop</Title>
      <ProductsWrapper>
        <ProductContext.Provider value={{editProductFunc : editProductsArray}}>
          {products}
        </ProductContext.Provider>
      </ProductsWrapper>
    </>
  );
};
