/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, getFirestore, doc } from 'firebase/firestore';
import ItemDetail from "./ItemDetail";
import LoadingIcon from "./LoadingIcon";

const ItemDetailContainer = () => {

    const { id } = useParams()
    const [loading, setIsLoading] = useState(true)
    const [vehicle, setVehicle] = useState(null)

    useEffect( () => {
        const db = getFirestore()
        const queryDoc = doc(db,'Vehiculos',id)
        getDoc(queryDoc)
        .then(res => setVehicle({id: res.id, ...res.data()}))
        .catch(err => console.error(err))
        setIsLoading(false)
        
    },[])

    return (
        <div className="itemDetailsContainer">
            {loading && <LoadingIcon />}
            {vehicle && <ItemDetail vehicle={vehicle} />}
        </div>
    );
}
 
export default ItemDetailContainer;