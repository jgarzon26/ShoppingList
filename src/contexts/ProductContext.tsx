import { createContext } from 'react';
import { Product } from '../models';

export const ProductContext = createContext({
    products : [] as Product[],
    setProducts : (products : Product[]) => {},
});