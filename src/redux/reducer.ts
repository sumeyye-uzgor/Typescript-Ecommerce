import actionTypes from "./actionTypes";
import { State, Action } from "../schemas/redux.schema";

const INITIAL_STATE = {
    category: 'all',
}

const reducer = (state = INITIAL_STATE, action: Action): State => {
    switch (action.type) {
        case actionTypes.SET_CATEGOTY:
            return {
                ...state,
                category: action.payload
            }
        default:
            return state

    }
}

export default reducer