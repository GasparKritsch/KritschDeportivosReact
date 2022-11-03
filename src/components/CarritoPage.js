import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoTrashSharp } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, getFirestore} from "firebase/firestore";

const CarritoPage = () => {
    const {cartList, setCartList} = useContext(CartContext)
    const [orderName, setOrderName] = useState('')
    const [orderPhone, setOrderPhone] = useState('')
    const [orderEmail, setOrderEmail] = useState('')

    const removeFromCarrito = (id) => {
        const filteredCartList = cartList.filter(car => car.id !== id)
        setCartList(filteredCartList)
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    const generarOrden = (e) => {
        e.preventDefault()
        const orden = {}

        orden.buyer = {
            nombre : orderName,
            telefono : orderPhone,
            mail : orderEmail
        }
        orden.items = cartList.map((car) => {
            const {id, marca, modelo, precio, cantidad} = car
            return {id, marca, modelo, precio, cantidad}
        })
        orden.total = precioTotal

        const db = getFirestore()
        const orders = collection(db, 'orders')
        addDoc(orders, orden)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(vaciarCarrito())
    }

    const precioTotal = cartList.reduce((acc,vehicle) => acc + (vehicle.precio * vehicle.cantidad), 0)

    return ( 
        <div className="carritoContainer">
            <ul className="addedToCartContainer">
                {cartList.map(vehicle => {
                    return(
                            <li className="cartVehicle" key={vehicle.id}>
                                <img src={`${vehicle.img}`} alt={`${vehicle.img}`} />
                                <IoTrashSharp className="removeFromCartIcon" onClick={() => removeFromCarrito(vehicle.id)}/>
                                <div>
                                    <p className="cartVehicleTitle">{vehicle.marca} {vehicle.modelo}</p>
                                    <p>{`${vehicle.kilometros} Km.`}</p>
                                    <p>{`Precio: u$s ${vehicle.precio}`}</p>
                                    <p>{`Unidades: ${vehicle.cantidad}`}</p>
                                    <p>{`Total: u$s ${vehicle.cantidad * vehicle.precio} `}</p>
                                </div>
                            </li>
                        )
                })}
            </ul>
            <div className="checkOutContainer">
                <div className="totalPrice">
                    <h2>Total:</h2>
                    <p>{`u$s ${precioTotal}`}</p>
                </div>
                <div className="formContainer">
                    <h2>Datos del comprador:</h2>
                    <form>
                        <h3>Nombre</h3>
                        <input type="text" value={orderName} onChange={(e) => setOrderName(e.target.value)} required placeholder="Fulano"/>
                        <h3>Telefono</h3>
                        <input type="text" value={orderPhone} onChange={(e) => setOrderPhone(e.target.value)} required placeholder="4332 4332"/>
                        <h3>Email</h3>
                        <input type="email" value={orderEmail} onChange={(e) => setOrderEmail(e.target.value)} required placeholder="fulano@react.com"/>
                        <button onClick={generarOrden}>Finalizar compra</button>
                    </form>
                </div>
                <div className="checkOutBtns">
                    <button><Link to="/KritschDeportivosReact/">Seguir comprando</Link></button>
                    <button onClick={ () => vaciarCarrito()}>Vaciar Carrito</button>
                </div>
                <h2 className="resumenDeCompra">Resumen de compra:</h2>
                <ul className="checkOutItems">
                    {cartList.map(vehicle => {
                        return(
                            <li key={vehicle.id}>
                                <p className="checkOutItemTitle">{`${vehicle.marca} ${vehicle.modelo}`}</p>
                                <p>{`Precio: u$s ${vehicle.precio} - Unidades: ${vehicle.cantidad}`}</p>
                                <p>{`Subtotal: u$s ${vehicle.cantidad * vehicle.precio}`}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
     );
}
 
export default CarritoPage;