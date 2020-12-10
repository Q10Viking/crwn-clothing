import cartTypes from './cart.types';

const toggleCartHidden = () => ({
    type: cartTypes.TOGGLE_CART_HIDDEN
})

const addItem = item => ({
    type: cartTypes.ADD_ITEM,
    payload: item
})

const clearCartItem = item => ({
    type: cartTypes.CLEAR_CART_ITEM,
    payload: item
})

const removeCartItem = item => ({
    type: cartTypes.REMOVE_ITEM,
    payload: item
})

export {
    toggleCartHidden,
    addItem,
    clearCartItem,
    removeCartItem
}