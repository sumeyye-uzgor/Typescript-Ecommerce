import actionTypes from './actionTypes'
import { Action } from '../schemas/redux.schema'

export const setCategory = (categoryName: string): Action => ({
    type: actionTypes.SET_CATEGOTY,
    payload: categoryName
})