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

interface ProductCardProps {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
  isInCart : boolean,
}

export const ProductCard = ({id, name, imageUrl, price, isInCart} : ProductCardProps) => {

  let products = useContext(ProductsContext);

  return (
    <Wrapper background={imageUrl}>
      <AddButton isInCart={isInCart} onClick={() => {
        products.products = [...products.products, { id, name, imageUrl, price }];
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
