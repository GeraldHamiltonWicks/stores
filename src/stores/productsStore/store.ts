import { create } from "zustand"
import { Product, ProductStore } from "./types";
import { createOneProduct, deleteOneProduct, loadProducts, updateOneProduct } from "./methods";

export const useProductStore = create<ProductStore>()((set) => ({
    products: [],
    loadProducts: () => loadProducts(set),
    createOneProduct: (newProduct: Product) => createOneProduct(set, newProduct),
    updateOneProduct: (updatedProduct: Product) => updateOneProduct(set, updatedProduct),
    deleteOneProduct: (id: number) => deleteOneProduct(set, id)
}))