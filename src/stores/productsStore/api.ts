import { Product } from "./types";

const BASE_URL = 'http://localhost:3002/product';

export async function fetchProducts(): Promise<Array<Product>> {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch products')
    }
    
    const data = await response.json();
    return data.products;
}

export async function createProduct(newProduct: Product): Promise<Product> {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(newProduct)
    })
    if (!response.ok) {
        throw new Error('Failed to create one product');
    }
    const data = await response.json();
    return data.product;
}

export async function updateProduct(updatedProduct: Product): Promise<Product> {
    const response = await fetch(BASE_URL, {
        method: 'PUT',
        body: JSON.stringify(updatedProduct)
    })
    if (!response.ok) {
        throw new Error('Failed to create one product');
    }
    const data = await response.json();
    return data.product;
}

export async function deleteProduct(id: number): Promise<void> {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
    })
    if (!response.ok) {
        throw new Error('Failed to create one product');
    }
}