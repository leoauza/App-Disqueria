import React, { createContext, useState } from "react";

/*Contexto con el hook createContext() importado en la qra. línea*/
export const CartContext = createContext({})

const {Provider} = CartContext

/*Acá hay que volvar las funciones que sucedan dentro del carrito */
export const CartProvider = ({ defaultValue = [], children }) => {

    const [cart, setCart] = useState(defaultValue);

    const clearCart = () => {
        setCart([]);
    }

    const addToCart = (item, quantity) => {
        setCart(
            [
                ...cart,
                {
                    item: item,
                    quantity: quantity
                }
            ]
        )
    }

    const context = {
        clearCart,
        addToCart
    }

    return (
        <Provider value={context}>
            {children}
        </Provider>
    )
}