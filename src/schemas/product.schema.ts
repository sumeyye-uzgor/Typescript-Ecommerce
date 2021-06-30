
export interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    category: string;
}
export interface ProductDetails extends Product {
    description: string;
}
export interface CartProduct extends Product {
    qty: number;
}