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

interface ProductCardProps {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
  isInCart : boolean,
}

export const ProductCard = ({id, name, imageUrl, price, isInCart} : ProductCardProps) => {

  let cart = useContext(CartContext);

  return (
    <Wrapper background={imageUrl}>
      <AddButton isInCart={isInCart} onClick={() => {
        cart.products = [...cart.products, { id, name, imageUrl, price }];
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
