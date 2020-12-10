import cartTypes from './cart.types';

const toggleCartHidden = () => ({
    type: cartTypes.TOGGLE_CART_HIDDEN
})

const addItem = item => ({
    type: cartTypes.ADD_ITEM,
    payload: item
})

const clearItem = item =>({
    type: cartTypes.CLEAR_CART_ITEM,
    payload: item
})

export {
    toggleCartHidden,
    addItem,
    clearItem
}