import { useContext, useState } from "react";
import { WishlistContext } from "../../contexts/WishlistContext";
import { ProductCard } from "../ProductCard";
import {ProductsWrapper, Title} from "../Products/Products.styled";

export const Wishlist = () => {

    let wishlistContext = useContext(WishlistContext);

    return (
        <>
            <Title>Wishlist</Title>
            <ProductsWrapper>
                {wishlistContext.products.map((data, index) => (
                    <ProductCard key={index} {...data} isInCart = {false} />
                ))}
            </ProductsWrapper>
        </>
    );
}