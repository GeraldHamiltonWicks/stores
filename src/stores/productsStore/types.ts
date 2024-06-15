export type Product = {
    id: number,
    title: string
};

export type ProductStore = {
    products: Array<Product>,
    loadProducts: () => Promise<void>,
    createOneProduct: (value: Product) => Promise<void>,
    updateOneProduct: (value: Product) => Promise<void>,
    deleteOneProduct: (id: number) => Promise<void>
}

export type StoreSet = (partial: ProductStore | Partial<ProductStore> | ((state: ProductStore) => ProductStore | Partial<ProductStore>), replace?: boolean | undefined) => void