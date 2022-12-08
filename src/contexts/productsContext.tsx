import { createContext } from 'react';
import { Product } from '../models';

export const ProductsContext  = createContext({
    products: [] as Product[],
});