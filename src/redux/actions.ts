import actionTypes from './actionTypes'
import { Action } from '../schemas/redux.schema'
import { Product } from '../schemas/product.schema'

export const setCategory = (categoryName: string): Action => ({
    type: actionTypes.SET_CATEGOTY,
    payload: categoryName
})

export const addToCart = (item: Product): Action => ({
    type: actionTypes.ADD_TO_CART,
    payload: item
})