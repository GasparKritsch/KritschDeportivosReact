import { useState } from "react";

const ItemCount = ({stock, onAdd}) => {

    const [count, setCount] = useState(1)

    const addCount = () => {
        if (count < stock) {
            setCount( count + 1)
        }
    }

    const reduceCount = () => {
        if (count > 1) {
            setCount( count - 1)
        }
    }

    return (

        <div className="itemCountContainer">
            <div>
                <button onClick={() => reduceCount() } >-</button>
                <p className="count">{count}</p>
                <button onClick={() => addCount() } >+</button>
            </div>
            <button className="addToCartBtn" onClick={() => onAdd(count) }>Add to cart</button>
        </div>
    );
}
 
export default ItemCount;