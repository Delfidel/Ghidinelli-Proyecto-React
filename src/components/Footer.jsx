import logoAn from "./images/logo-andromaco (1).png";
import logoDer from "./images/logo-dermaglos-90aniv (1).png";
import face from "./images/facebook (3).png";
import ig from "./images/instagram (7).png";
import yt from "./images/youtube (1).png";






const Footer = () => {
    return (
        <div className="container-fluid my-5">
                <div className="row">
                    <div className="col">
                        <img src={logoAn} alt={logoAn} width={190} />
                    </div>
                    <div className="col text-end">
                    <img src={logoDer} alt={logoDer} width={200} />
                    </div>
                </div>
                <div className="row">
                    <div className="col text-secondary "  width={23}  >
                    <br /> Términos y condiciones de uso
                    <br /> Copyright Laboratorios Andrómaco
                    <br /> Reservados todos los derechos a nivel mundial
                    <br /> CONSULTAS: 0800-333-0033
                    <br /> Para acercar su consulta o reclamo a nuestro laboratorio, por favor ingrese aquí.
                    <br /> Defensa de las y los Consumidores, para reclamos, ingrese aquí.
                    <br /> AVISO IMPORTANTE
                    </div>
                    <div className="col text-end text-secondary">
                        <a href={"/https://www.facebook.com/Dermaglos"} className="ms-3"> <img src={face} alt={face} width={27}  />  </a>
                        <a href={"/https://www.instagram.com/Dermaglos/"} className="ms-3"> <img src={ig} alt={ig} width={27}  />  </a>
                        <a href={"/https://www.youtube.com/user/DermaglosARG"} className="ms-3"> <img src={yt} alt={yt} width={27}  />  </a>
                        <p>Seguinos en las redes</p>
                    </div>

                </div>
        </div>






    );










}

export default Footer












