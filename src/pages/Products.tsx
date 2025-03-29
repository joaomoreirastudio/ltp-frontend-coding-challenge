import React, { useEffect, useState } from "react";
import ProductsGRID from "../components/ProductsGRID/ProductsGRID.tsx";

interface ProductsGRIDProps {
    products: any[];
}

const Products: React.FC = () => {
    const [products, setproducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => setproducts(data.products))
            .catch((error) => console.error("Error fetching data:", error));
    });

    return (
        <>
            <ProductsGRID products={products} />
        </>
    );
};

export default Products;
