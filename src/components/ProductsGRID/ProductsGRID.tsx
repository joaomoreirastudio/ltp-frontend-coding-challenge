import styled from "styled-components";
import {
    ProductsContainer,
    Product,
    ProductIMG,
    ProductsHeader,
    ProductsDescription,
    ProductCategoryContainer,
    ProductCategory,
    CategoryButton,
    FiltersContainer,
    Filters,
    BtnLoadMore,
    FavouritesICON,
    StyledLink,
} from "./ProductsGRID.styled";
import { useState, useEffect } from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

interface ProductsGRIDProps {
    products: any[];
}

const ProductsGRID: React.FC<ProductsGRIDProps> = ({ products }) => {
    const [limit, setLimit] = useState(9);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [productsToShow, setProductsToShow] = useState(products);
    const [selectedProduct, setSelectedProduct] =
        useState<ProductsGRIDProps | null>(null);

    useEffect(() => {
        const categories = Array.from(
            new Set(products.map((product) => product.category))
        );
        setCategories(categories);
    }, [products]);

    useEffect(() => {
        if (selectedCategory) {
            const filteredProducts = products.filter(
                (product) => product.category === selectedCategory
            );
            if (filteredProducts.length > limit) {
                setProductsToShow(filteredProducts.slice(0, limit));
            } else {
                setProductsToShow(filteredProducts);
            }
        } else {
            setProductsToShow(products.slice(0, limit));
        }
    }, [selectedCategory, products, limit]);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    const handleLoadMore = () => {
        setLimit(limit + 9);
        if (selectedCategory) {
            const filteredProducts = products.filter(
                (product) => product.category === selectedCategory
            );
            setProductsToShow([
                ...productsToShow,
                ...filteredProducts.slice(limit, limit + 9),
            ]);
        } else {
            setProductsToShow([
                ...productsToShow,
                ...products.slice(limit, limit + 9),
            ]);
        }
    };

    const handleProductClick = (product: any) => {
        setSelectedProduct(product);
    };

    return (
        <>
            <main>
                <div>
                    <ProductsHeader>Shop</ProductsHeader>
                    <ProductsDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        eligendi officiae consequatur
                    </ProductsDescription>

                    <ProductCategoryContainer>
                        <ProductCategory>
                            {categories.map((category) => (
                                <CategoryButton
                                    key={category}
                                    onClick={() =>
                                        handleCategoryClick(category)
                                    }
                                    isSelected={selectedCategory === category}
                                >
                                    {category}
                                </CategoryButton>
                            ))}
                        </ProductCategory>
                    </ProductCategoryContainer>
                </div>
                <FiltersContainer>
                    <Filters>
                        <span>All filters</span>
                        <span>Sort by</span>
                    </Filters>
                    <div>
                        <span>
                            Showing {productsToShow.length} of {products.length}
                        </span>
                    </div>
                </FiltersContainer>
                <ProductsContainer>
                    {productsToShow.map((product) => (
                        <StyledLink
                            to={`/product/${product.id}`}
                            onClick={() => handleProductClick(product)}
                            key={product.id}
                        >
                            <Product>
                                <ProductIMG
                                    src={product.images}
                                    alt={product.title}
                                />
                                <div>
                                    <h2>{product.title}</h2>
                                    <FavouritesICON icon={faHeart} />
                                </div>
                                <p>{product.price}€</p>
                            </Product>
                        </StyledLink>
                    ))}
                </ProductsContainer>
                <BtnLoadMore>
                    <button onClick={handleLoadMore}>LOAD MORE</button>
                </BtnLoadMore>
            </main>
        </>
    );
};

export default ProductsGRID;
