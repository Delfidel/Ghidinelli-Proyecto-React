



const ItemListContainer = ({greeting}) => {
    return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col text-center my-5">
                        <div class="alert alert-primary" role="alert">
                            <h1>{greeting}</h1>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default ItemListContainer;
