import "./App";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Destacada from "./components/Destacada.jsx";
import ItemListContainer from "./components/ItemListContainer";



function App() {
  return (
    <div>
        <NavBar />
        <Destacada/>
        <ItemListContainer greeting={"Esto es una pagina de prueba"}/>
        <Footer/>
    </div>
    );
}

export default App;
