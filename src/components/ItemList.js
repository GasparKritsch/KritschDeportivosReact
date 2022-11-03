import { Link } from "react-router-dom"
import Item from "./Item";

const ItemList = ({vehicles}) => {
    
    return (vehicles.map(vehicle => (
        <Link to={`/KritschDeportivosReact/item/${vehicle.id}`} key={vehicle.id}>
            <Item vehicle = {vehicle}/>
        </Link>
    )))

}
 
export default ItemList;