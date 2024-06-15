import { create } from "zustand"
import { Product, ProductStore } from "./types";
import { createProduct, deleteProduct, fetchProducts, updateProduct } from "./api";

export const useProductStore = create<ProductStore>()((set) => ({
    products: [],
    loadProducts: async() => {
        const products = await fetchProducts();
        return set(state => ({...state, products}));
    },
    createOneProduct: async(newProduct: Product) => {
        const product = await createProduct(newProduct);
        return set(state => ({
            ...state, 
            products: [...state.products, product]
        }));
    },
    updateOneProduct: async(updatedProduct: Product) => {
        const product = await updateProduct(updatedProduct);
        return set(state => ({
            ...state, 
            products: state.products.map(p => p.id === product.id ? product : p)
        }));
    },
    deleteOneProduct: async(id: number) => {
        await deleteProduct(id);
        return set(state => ({
            ...state, 
            products: state.products.filter(product => id === product.id)
        }));
    }
}))