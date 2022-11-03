import { useContext } from "react";
import { IoCartSharp } from "react-icons/io5";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {

    const {cartList} = useContext(CartContext)
    const itemsTotales = cartList.reduce((acc, vehicle) => acc + vehicle.cantidad, 0)

    return(
        <div className="cartIconNumberContainer">
            <IoCartSharp className="cartIcon"/>
            <p>{itemsTotales}</p>
        </div>
    )
}

export default CartWidget