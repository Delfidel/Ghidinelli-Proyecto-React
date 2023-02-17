import CartWidget from "./CartWidget";
import logo from "./images/logo-Dermaglos.png";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                        <a className="navbar-brand" href= {"/"}>  <img src= {logo} alt="Dermaglos Argentina" /> </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href={"/productos"}>Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={"/cuidado-facial"}>Cuidado Facial</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={"/cuidado-corporal"}> Cuidado Corporal</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={"/compra-dermaglos"}> Comprá Dermaglós</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </nav> 
                </div>
                <div className="col d-flex align-items-end justify-content-end">
                <CartWidget/>
                </div>
            </div>
            
        </div>

    );


}

export default NavBar