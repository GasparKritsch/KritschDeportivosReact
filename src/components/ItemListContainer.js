import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import ItemList from "./ItemList";
import LoadingIcon from "./LoadingIcon";

const ItemListContainer = () => {

    const { categoryId } = useParams()    
    const [loading, setIsLoading] = useState(true)
    const [vehicles, setVehicles] = useState(null)

    useEffect( () => {
        
        const db = getFirestore()
        const query = collection(db,'Vehiculos')
        getDocs(query)
        .then(res => setVehicles(res.docs.map(vehicle => ({id:vehicle.id, ...vehicle.data()}) )))
        .catch(err => console.error(err))
        setIsLoading(false)
        
    },[])

    return(
        <div className="itemListContainer">
            {loading && <LoadingIcon />}
            {vehicles && <ItemList vehicles={categoryId ? vehicles.filter(vehicle => vehicle.categoria === categoryId) : vehicles} />}
        </div>
    )
}

export default ItemListContainer;
