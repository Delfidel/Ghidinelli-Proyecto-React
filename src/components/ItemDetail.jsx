


const ItemDetail = ({item}) =>{
    return(
        <div className="destacadoProducto">
            <div className="row">
                <div className="d-flex">
                    <div className="flex-shrink-0 height-355 width-355 "  >
                    <img className={"img-thumbnail"} src={item.imagen} alt={item.nombre} />
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <div>
                        <h1>{item.nombre} </h1>
                        <p>{item.descripcion} </p>
                        <p><b>${item.precio}</b> </p>
                        </div>
                    </div>
                </div>
                </div>
        </div>
        )

}
export default ItemDetail;