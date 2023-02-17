import {useState} from "react";

const ItemCount = ({stock}) => {
    const [items, setItems] = useState (1)
    const [itemStock, setItemStock ] = useState (stock);
    
    const incrementarStock = () => {
        if (items < itemStock){
            setItems (items + 1);
        }
        
    }
    
    const decrementarStock = () => {
        if (items > 1){
            setItems (items - 1);
        }
    }
    
    
    const onAdd  = () => {
        if (itemStock >= items){
            setItemStock(itemStock - items);
            setItems (1);
            console.log("Agregaste: " + items + " Productos al carrito");
        }
        
    }
    
    
    
    return (
        <div className="container">
            <div className="row my-1">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" className="btn btn-success" onClick={decrementarStock}
                        >-</button>
                        <button type="button" className="btn btn-success">{items}</button>
                        <button type="button" className="btn btn-success" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    <button className="btn btn-success" onClick={onAdd}>Agregar al Carrito</button>
                </div>
            </div>
        </div>









    )



}


export default ItemCount 