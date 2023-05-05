
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from './cart-actions'
import {
    addItemToCart,
    removeItemFromCart,
    resetShipping,
} from './cart-functions'

const initialState = {
    cartProducts: [],
    shippingCost: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartProducts: addItemToCart(state.cartProducts, action.payload),
                shippingCost: 25,
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartProducts: removeItemFromCart(state.cartProducts, action.payload),
                shippingCost: resetShipping(state.cartProducts),
            }
        case CLEAR_CART:
            return {
                ...state,
                cartProducts: [],
                shippingCost: 0,
            }
        default:
            return state;
    }
}

export default cartReducer; 