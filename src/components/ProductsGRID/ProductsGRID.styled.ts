import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { Link } from "react-router-dom";

export const HeartIcon = styled(FontAwesomeIcon)`
    font-size: 24px;
    color: #ff69b4;
`;
const flex = (alignItems: string, justifyContent: string) => `
  display: flex;
  align-items: ${alignItems};
  justify-content: ${justifyContent};
`;

interface CategoryButtonProps {
    isSelected: boolean;
}

export const ProductsHeader = styled.h1`
    ${flex("center", "center")};
    gap: 20px;
    margin: 0 auto;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 3rem;
    padding-top: 3rem;
    @media screen and (min-width: 768px) {
        ${flex("center", "flex-start")};
        max-width: 121rem;
        flex-wrap: wrap;
    }
`;

export const ProductsDescription = styled.p`
    ${flex("center", "center")};
    margin: 0 auto;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    padding-top: 1.5rem;
    width: 80%;
    justify-content: center;
    @media screen and (min-width: 768px) {
        ${flex("center", "flex-start")};
        max-width: 121rem;
        flex-wrap: wrap;
        gap: 20px;
        width: 100%;
    }
`;

export const ProductCategoryContainer = styled.div`
    ${flex("center", "center")}
    gap: 20px;
    margin: 0 auto;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 2rem;
    padding-top: 1.5rem;
    @media screen and (min-width: 768px) {
        ${flex("center", "flex-start")};
        max-width: 121rem;
        font-size: 3rem;
    }
`;

export const ProductCategory = styled.div`
    ${flex("center", "center")};
    flex-wrap: wrap;
    gap: 10px;
    margin: 0 auto;
    padding-top: 1.5rem;
    @media screen and (min-width: 768px) {
        ${flex("center", "flex-start")};
        max-width: 121rem;
        gap: 20px;
    }
`;
export const CategoryButton = styled.button<CategoryButtonProps>`
    background-color: ${(props) => (props.isSelected ? "coral" : "white")};
    color: ${(props) => (props.isSelected ? "white" : "black")};
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    position: relative;
    padding-bottom: 2rem;
    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0%;
        height: 3px;
        background-color: coral;
        transition: width 0.3s ease-in-out;
    }

    &:hover::after {
        width: 80%;
    }

    @media screen and (min-width: 768px) {
        padding: 10px 20px;
    }
`;

export const FiltersContainer = styled.div`
    ${flex("center", "space-between")};
    width: 90%;
    margin: 0 auto;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 1rem;

    @media screen and (min-width: 768px) {
        padding-top: 1.5rem;
        max-width: 122rem;
        width: 100%;
        flex-wrap: wrap;
        gap: 40px;
    }
`;

export const Filters = styled.div`
    gap: 1rem;
    ${flex("center", "space-between")};
    span {
        border-radius: 0.4rem;
        border: 1px solid #ccc;
        padding: 0.5rem;
        &:hover {
            border-color: coral;
            color: coral;
        }
    }
`;
export const ProductsContainer = styled.div`
    ${flex("center", "center")};
    flex-wrap: wrap;
    width: 100%;
    gap: 20px;
    margin: 0 auto;
    padding-top: 1rem;
    @media screen and (min-width: 768px) {
        max-width: 150rem;
    }
`;

export const Product = styled.div`
    ${flex("flex-start", "center")};
    flex-direction: column;
    width: 100%;

    h2 {
        width: 70%;
    }
    p,
    div {
        ${flex("center", "Space-between")};
        width: 90%;
        margin: auto;
    }
    @media screen and (min-width: 768px) {
        ${flex("flex-start", "center")};
        height: auto;
        padding-bottom: 1rem;
        text-decoration: none;
        color: inherit;
        width: 100%;
        h2 {
            position: relative;
            margin-bottom: 0;
            width: auto;
            &::after {
                content: "";
                position: absolute;
                bottom: -3px; /* ajuste a posição para que fique abaixo do texto */
                left: 100%;
                transform: translateX(-100%);
                width: 0%;
                height: 2px;
                background-color: coral;
                transition: width 0.6s ease-in-out;
            }
        }

        &:hover h2::after {
            width: 7rem;
        }

        p,
        div {
            ${flex("center", "Space-between")};
            width: 100%;
            gap: 1rem;
        }

        p {
            padding-top: 1rem;
        }
    }
`;

export const FavouritesICON = styled(FontAwesomeIcon)`
    font-size: 1.5rem;

    @media screen and (min-width: 768px) {
        &:hover {
            color: coral;
        }

        &.active {
            color: coral;
            background-color: coral;
        }
        &.active:hover {
            color: coral;
        }
    }
`;

export const ProductIMG = styled.img`
    width: 100%;
    height: auto;
    background-color: #f2f2f2;
    @media screen and (min-width: 768px) {
        width: 40rem;
        height: auto;
    }
`;

export const BtnLoadMore = styled.div`
    ${flex("center", "center")};
    margin-bottom: 5rem;
    width: 100%;
    button {
        width: 90%;
        background-color: white;
        font-family: "Inter", sans-serif;
        font-weight: 400;
        font-size: 1rem;
        position: relative;
        border-radius: 0.4rem;
        border: 0.1rem solid coral;
        padding: 1rem;
        color: coral;
        margin-top: 2rem;
    }

    @media screen and (min-width: 768px) {
        button {
            width: 50rem;

            &:hover {
                border-color: coral;
                color: white;
                background-color: coral;
            }
        }
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
