import "./App";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <div>
        <NavBar />
        <Routes>
        <Route path={"/" } element={<ItemListContainer />} />
        <Route path={"/category/:id" } element={<ItemListContainer />} />
        <Route path={"/item/:id" } element={<ItemDetailContainer />} />
        </Routes>
        
        <Footer/>
    </div>
    </BrowserRouter>

    );
}

export default App;
