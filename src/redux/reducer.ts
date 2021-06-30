import actionTypes from "./actionTypes";
import { State, Action } from "../schemas/redux.schema";
import { Product } from "../schemas/product.schema";

const items: Product[] = []

const INITIAL_STATE = {
    category: 'all',
    cartItems: [...items],
}

const reducer = (state = INITIAL_STATE, action: Action): State => {
    switch (action.type) {
        case actionTypes.SET_CATEGOTY:
            return {
                ...state,
                category: action.payload
            }
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        default:
            return state

    }
}

export default reducer