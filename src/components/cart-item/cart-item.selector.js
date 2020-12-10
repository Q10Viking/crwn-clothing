import { createSelector } from 'reselect'

const getCart = state => state.cart;

export const getCartItems = createSelector(
    getCart,
    cart => cart.cartItems
)

export const getCartItemsCount = createSelector(
    getCartItems,
    cartItems => {
        return cartItems.reduce((accumulatorQuantity,currentCartItem)=>(
            accumulatorQuantity + currentCartItem.quantity
        ),0);
    }
)