import { createContext } from 'react';
import { Product } from '../models';

export const CartContext  = createContext({
    products: [] as Product[],
});