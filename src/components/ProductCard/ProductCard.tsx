import {
  AddButton,
  SubTitle,
  TextContainer,
  Title,
  Wrapper,
} from './ProductCard.styled';

import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';

import { Product } from '../../models';
import { ProductActionTypes } from '../ProductCard';
import { ProductContext } from '../../contexts/ProductContext';

interface ProductCardProps {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
  isInCart : boolean,
}

export const ProductCard = ({id, name, imageUrl, price, isInCart} : ProductCardProps) => {

  let cart = useContext(CartContext);
  const productContext = useContext(ProductContext);

  return (
    <Wrapper background={imageUrl}>
      <AddButton isInCart={isInCart} onClick={() => {
        cart.products = [...cart.products, { id, name, imageUrl, price }];
        productContext.editProductFunc(ProductActionTypes.Remove, id);
      }}>
        <p>{!isInCart ? '+' : '-'}</p>
      </AddButton>
      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>{price}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};
