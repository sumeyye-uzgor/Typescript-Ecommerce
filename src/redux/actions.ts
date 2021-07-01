import actionTypes from './actionTypes'
import { Action } from '../schemas/redux.schema'
import { Product, DetailsProduct } from '../schemas/product.schema'

export const setCategory = (categoryName: string): Action => ({
    type: actionTypes.SET_CATEGOTY,
    payload: categoryName
})

export const addToCart = (item: Product): Action => ({
    type: actionTypes.ADD_TO_CART,
    payload: item
})
export const deleteFromCart = (itemId: number): Action => ({
    type: actionTypes.DELETE_FROM_CART,
    payload: itemId
})
export const setQuantity = (itemId: number, qty: number): Action => ({
    type: actionTypes.SET_QUANTITY,
    payload: { itemId, qty }
})

export const setDetailsProduct = (detailsProduct: DetailsProduct): Action => ({
    type: actionTypes.SET_DETAILS_PRODUCT,
    payload: detailsProduct
})