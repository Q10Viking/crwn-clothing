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

export {
    addItem
};