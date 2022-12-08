import {
  AddButton,
  SubTitle,
  TextContainer,
  Title,
  Wrapper,
} from './ProductCard.styled';

import { useContext } from 'react';

import { ProductsContext } from '../../contexts/productsContext';

import { Product } from '../../models';

export const ProductCard = ({ id, name, imageUrl, price }: Product) => {

  let products = useContext(ProductsContext);

  return (
    <Wrapper background={imageUrl}>
      <AddButton isInCart={false} onClick={() => {
        products.products = [...products.products, { id, name, imageUrl, price }];
      }}>
        <p>+</p>
      </AddButton>
      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>{price}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};
