import React, { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails/ProductDetails.tsx";

interface ProductDetailsProps {
    products: any[];
}

const ProductPage: React.FC = () => {
    const [products, setproducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => setproducts(data.products))
            .catch((error) => console.error("Error fetching data:", error));
    });

    return (
        <>
            <ProductDetails products={products} />
        </>
    );
};

export default ProductPage;
