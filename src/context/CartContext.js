import { createContext, useEffect, useState } from "react";
export const CartContext = createContext([])

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState(JSON.parse(localStorage.getItem('carrito')) || [])

    const addItem = (item) => {
        const index = cartList.findIndex(car => car.id === item.id)
        if (index === -1){
            setCartList([...cartList, item])
        } else {
            cartList[index].cantidad += item.cantidad
            setCartList([...cartList])
        }
    }

    useEffect( () => {
        localStorage.setItem('carrito', JSON.stringify(cartList))
    }, [cartList])

    return(
        <CartContext.Provider value={{
            cartList,
            setCartList,
            addItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;