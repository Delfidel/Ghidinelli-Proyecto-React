const Loading = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>Cargando...Por Favor, Espere</h1>
                    <div class="spinner-grow text-info" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Loading;