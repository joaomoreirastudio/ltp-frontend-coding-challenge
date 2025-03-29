import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
    ProductButtons,
    ProductContainer,
    ProductCounter,
    ProductIMG,
    ProductIMGContainer,
    ProductInfo,
    ProductInfoContainer,
    ProductsDescription,
} from "./ProductDetails.styled";

interface ProductDetailsProps {
    products: any[];
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ products }) => {
    const [count, setCount] = useState(1);

    const { id } = useParams();
    const productId = id ? parseInt(id) : null;

    const product = products.find((p) => p.id === productId);

    if (!product) {
        return <div>Produto não encontrado</div>;
    }

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <ProductContainer>
            <ProductIMGContainer>
                <ProductIMG src={product.images} alt={product.title} />
            </ProductIMGContainer>
            <ProductInfoContainer>
                <ProductInfo>
                    <h1>{product.title}</h1>
                    <p>{product.price}€</p>
                </ProductInfo>
                <ProductCounter>
                    <button onClick={handleDecrement}>-</button>
                    <span>{count}</span>
                    <button onClick={handleIncrement}>+</button>
                </ProductCounter>
                <ProductButtons>
                    <button className="cart">Add to cart</button>
                    <button className="buy">Buy now</button>
                </ProductButtons>
                <span className="separator"></span>
                <ProductsDescription>{product.description}</ProductsDescription>
            </ProductInfoContainer>
        </ProductContainer>
    );
};

export default ProductDetails;
