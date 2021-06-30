import actionTypes from "./actionTypes";
import { State, Action } from "../schemas/redux.schema";
import { CartProduct } from "../schemas/product.schema";

const items: CartProduct[] = []

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
                cartItems: state.cartItems.find(item => item.id === action.payload.id) ? state.cartItems.map(item => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item) : [...state.cartItems, { ...action.payload, qty: 1 }]
            }
        case actionTypes.DELETE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            }
        case actionTypes.SET_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map(item => item.id === action.payload.itemId ? { ...item, qty: item.qty + action.payload.qty } : item)
            }
        default:
            return state

    }
}

export default reducer