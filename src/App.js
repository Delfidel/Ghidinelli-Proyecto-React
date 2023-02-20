import "./App";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Destacada from "./components/Destacada.jsx";
import Error404 from "./components/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <div>
          <NavBar />
          <Destacada />
          <Routes>
          <Route path={"/" } element={<ItemListContainer />} />
          <Route path={"/category/:id" } element={<ItemListContainer />} />
          <Route path={"/item/:id" } element={<ItemDetailContainer />} />
          <Route path={"*" } element={<Error404 />} />
          </Routes>
          
          <Footer/>
        </div>
    </BrowserRouter>

    );
}

export default App;
