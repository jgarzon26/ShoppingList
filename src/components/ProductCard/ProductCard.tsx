import {
  AddButton,
  SubTitle,
  TextContainer,
  Title,
  Wrapper,
} from './ProductCard.styled';

import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { ProductContext } from '../../contexts/ProductContext';

interface ProductCardProps {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
  isInCart : boolean,
  quantity : number,
}

export const ProductCard = ({id, name, imageUrl, price, isInCart, quantity} : ProductCardProps) => {

  const cart = useContext(CartContext);
  const productContext = useContext(ProductContext);

  const changeQuantity = (isInCart : Boolean) => {

    let currentContext = isInCart ? cart : productContext;
    let otherContext = isInCart ? productContext : cart;
    let productsExistInOtherContext = otherContext.products.find((product) => product.id == id);

    if(productsExistInOtherContext) {
      productsExistInOtherContext.quantity++;
      otherContext.products = otherContext.products.filter((product) => product.id != id);
      otherContext.setProducts([...otherContext.products, productsExistInOtherContext].sort((a, b) => a.id - b.id));
    } else {
      otherContext.products = [...otherContext.products, { id, name, imageUrl, price, quantity: 1 }];
      otherContext.setProducts(otherContext.products.sort((a, b) => a.id - b.id));
    }

    currentContext.products = currentContext.products.map((product) => {
      if(product.id != id) {
        return product;
      }

      if(product.quantity - 1 == 0) {
        currentContext.products = currentContext.products.filter((product) => product.id != id);
        currentContext.setProducts(currentContext.products);
        return product;
      }

      product.quantity -= 1;
      return product;
    });
  }

  return (
    <Wrapper background={imageUrl}>
      <AddButton isInCart={isInCart} onClick={() => {
        changeQuantity(isInCart);
      }}>
        <p>{!isInCart ? '+' : '-'}</p>
      </AddButton>
      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>{price}.00$</SubTitle>
        <SubTitle>Quantity: {quantity}</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};

