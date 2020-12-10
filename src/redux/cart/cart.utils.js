// group item together
const addItem = (cartItems,item) => {
    const exsitingItem = cartItems.find(cartItem => cartItem.id === item.id);

    if(exsitingItem){
        return cartItems.map(cartItem => (
            cartItem.id === item.id ? {...cartItem,quantity:cartItem.quantity+1}
                : cartItem
        ))
    }else{
        return [...cartItems,{...item,quantity:1}]
    }
}



const removeItem = (cartItems,cartItemToRemove) => {
    const exsitingItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
    if(exsitingItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }else{
        return cartItems.map( 
            cartItem => 
            cartItem.id === cartItemToRemove.id ? {...cartItem,quantity: cartItem.quantity-1} : cartItem
        )
    }
}

export {
    addItem,
    removeItem
};



