export const addItemToCart = (cartProducts, product) =>{
    const productInCart = cartProducts.filter(item => item.id === product.id)[0]

    if(productInCart) {
        return cartProducts.map(item => 
            item.id === productInCart.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
    }

    return [...cartProducts, {...product, quantity: 1}]
};

export const removeItemFromCart = (cartProducts, product) => {
    if(product.quantity > 1){
        return cartProducts.map(item => 
            item.id === product.id
            ? {...item, quantity: item.quantity - 1}
            : item
            );
    }

    return cartProducts.filter(item => item.id !== product.id)
};

export const resetShipping = (cartProducts) => {
    if(cartProducts.length === 1){
        return 0;
    }

    return 25;
}