import { useContext, useState } from "react";
import { WishlistContext } from "../../contexts/WishlistContext";
import { Title } from "./Wishlist.styled";

export const Wishlist = () => {

    let wishlistContext = useContext(WishlistContext);

    return (
        <>
            <Title>Wishlist</Title>

        </>
    );
}