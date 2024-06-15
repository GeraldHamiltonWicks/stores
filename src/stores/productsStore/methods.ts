import { createProduct, deleteProduct, fetchProducts, updateProduct } from "./api";
import { Product, StoreSet } from "./types";

export async function loadProducts(set: StoreSet): Promise<void> {
    try {
        const products = await fetchProducts();
        set(state => ({...state, products}));
    } catch (error) {
        console.error(error);
        set(state => state);
    }
}

export async function createOneProduct(set: StoreSet, newProduct: Product): Promise<void> {
    try {
        const product = await createProduct(newProduct);
        set(state => ({
            ...state,
            products: [...state.products, product]
        }));
    } catch (error) {
        console.error(error);
        set(state => state);
    }
}

export async function updateOneProduct (set: StoreSet, updatedProduct: Product): Promise<void> {
    try {
        const product = await updateProduct(updatedProduct);
        set(state => ({
            ...state,
            products: [...state.products, product]
        }));
    } catch (error) {
        console.error(error);
        set(state => state);
    }
};

export const deleteOneProduct = async (set: StoreSet, id: number) => {
    try {
        await deleteProduct(id);
        set(state => ({
            ...state,
            products: state.products.filter(product => product.id !== id)
        }));
    } catch (error) {
        console.error(error);
        set(state => state);
    }
};