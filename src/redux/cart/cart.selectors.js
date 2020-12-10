import { createSelector } from 'reselect'

const getCart = state => state.cart;

export const getCartItems = createSelector(
    getCart,
    cart => cart.cartItems
)

export const getCartHidden = createSelector(
    getCart,
    cart => cart.hidden
)

export const getCartItemsCount = createSelector(
    getCartItems,
    cartItems => {
        return cartItems.reduce((accumulatorQuantity,currentCartItem)=>(
            accumulatorQuantity + currentCartItem.quantity
        ),0);
    }
)


export const getTotal = createSelector(
    getCartItems,
    cartItems => {
        return cartItems.reduce((accumulatorQuantity,currentCartItem)=>(
            accumulatorQuantity + currentCartItem.quantity*currentCartItem.price
        ),0);
    }
)