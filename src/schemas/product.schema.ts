
export interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
}
export interface ProductDetails extends Product {
    description: string;
}