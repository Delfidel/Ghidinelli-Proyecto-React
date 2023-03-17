import "./App";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Cart from "./components/Cart";
import Destacada from "./components/Destacada.jsx";
import Error404 from "./components/Error404";
import Checkout from "./components/Checkout";
import Gracias from "./components/Gracias";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./components/context/CartContext";


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
          <div>
            <NavBar />
            <Destacada/>
            <Routes>
            <Route exact path={"/" } element={<ItemListContainer />} />
            <Route exact  path={"/category/:id" } element={<ItemListContainer />} />
            <Route exact  path={"/item/:id" } element={<ItemDetailContainer />} />
            <Route exact  path={"/cart" } element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/gracias/:orderId"} element={<Gracias />} />
            <Route exact  path={"*"} element={<Error404 />} />
            </Routes>
            
            <Footer/>
          </div>
      </BrowserRouter>
    </CartContextProvider>

    );
}

export default App;
