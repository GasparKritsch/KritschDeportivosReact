import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({vehicle}) => {

    const {addItem} = useContext(CartContext)

    const onAdd = (count) => {
        addItem({...vehicle, cantidad: count})
    }
        
    return ( 
        <div className="car">
            <img src={vehicle.img} alt={vehicle.img} />
            <div className="carInfo">
                <p className="carInfoTitulo">{`${vehicle.marca} ${vehicle.modelo}`}</p>
                <p className="carInfoPrecio">{`Precio: u$s ${vehicle.precio}`}</p>
                <p className="carInfoKm">{`Kilometros: ${vehicle.kilometros}`}</p>
                <p className="carInfoYear">{`Año: ${vehicle.year}`}</p>
                <p className="carInfoCat">{`Categoria: ${vehicle.categoria}`}</p>
                <p className="itemStock">{`Stock: ${vehicle.stock}`}</p>
                <ItemCount stock={vehicle.stock} onAdd={onAdd} />
            </div>
        </div>

    );
}
 
export default ItemDetail;