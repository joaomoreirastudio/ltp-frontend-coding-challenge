import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import ProductPage from "./pages/Product";
import NavBar from "./components/shared/NAVBAR/NavBar";

function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
        </div>
    );
}

export default App;
