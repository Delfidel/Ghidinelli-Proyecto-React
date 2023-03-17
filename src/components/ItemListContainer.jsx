import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getFirestore, query ,  where } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items, setItems] = useState ([]);
    const [loading, setLoading] = useState(true)
    const {id} = useParams ();

        useEffect(() => {
            const db = getFirestore();
            const itemsCollection = collection (db, "items");
            const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection 
            getDocs(q).then(products => {
                setItems(products.docs.map(product => ({id:product.id , ...product.data()})));
                setLoading(false);
            });
        },[id]);

    return(
            <div className="container my-5">
                {loading ? <Loading/> : <ItemList items={items}/> }
            </div>

    )
}

export default ItemListContainer;
