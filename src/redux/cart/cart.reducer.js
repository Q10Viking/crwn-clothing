import cartTypes from './cart.types';
import {addItem,removeItem} from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case cartTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case cartTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItem(state.cartItems,action.payload)
            }
        case cartTypes.CLEAR_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }
        case cartTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItem(state.cartItems,action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;