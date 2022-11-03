const Item = ({vehicle}) => {
    
    return (
        <div className="vehicle">
                <div className="vehicleImg">
                    <img src={vehicle.img} alt={vehicle.img} />
                </div>
                <div className="vehicleInfo">
                    <p className="precio">u$s {vehicle.precio}</p>
                    <p className="titulo">{`${vehicle.marca} ${vehicle.modelo}`}</p>
                    <p className="kilometros">{`${vehicle.kilometros} km.`}</p>
                </div>
        </div>
    );
}
 
export default Item;