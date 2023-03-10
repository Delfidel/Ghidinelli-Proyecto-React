import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState ([]);
    const {id} = useParams ();

    useEffect (() => {
        const promesa = new Promise((resolve) => {
            setTimeout (() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos );
            }, 2000);
        });
        promesa.then((respuesta)=>{
            setItems(respuesta);
        });
    }, [id]);

    return(
            <div className="container my-5">
                <ItemList items={items} />
            </div>

    )
}

export default ItemListContainer;
