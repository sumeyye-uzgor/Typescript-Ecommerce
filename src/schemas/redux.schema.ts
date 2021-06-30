import { CartProduct } from "./product.schema";

export interface Action {
    type: string,
    payload: any
}
export interface State {
    category: string,
    cartItems: CartProduct[];
}
