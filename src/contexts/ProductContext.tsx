import { createContext } from 'react';
import { ProductActionTypes } from '../components/ProductCard';

export const ProductContext = createContext({
    editProductFunc : (action : ProductActionTypes, id : number) => {}
});