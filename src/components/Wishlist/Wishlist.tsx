import { useContext, useEffect, useState } from "react";
import { WishlistContext } from "../../contexts/WishlistContext";
import { ProductCard } from "../ProductCard";
import {ProductsWrapper, Title} from "../Products/Products.styled";

export const Wishlist = () => {

    let wishlistContext = useContext(WishlistContext);

    return (
        <>
            <ProductsWrapper>
                {wishlistContext.products.map((data, index) => (
                    <ProductCard key={index} {...data} isInCart = {false} isInWishlist = {true} />
                ))}
            </ProductsWrapper>
        </>
    );
}