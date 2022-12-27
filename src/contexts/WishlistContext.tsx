import { createContext } from "react";
import { Product } from "../models";

export const WishlistContext = createContext({
    products: [] as Product[],
    setProducts: (products: Product[]) => {},
});