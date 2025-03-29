import styled from "styled-components";

const flex = (alignItems: string, justifyContent: string) => `
  display: flex;
  align-items: ${alignItems};
  justify-content: ${justifyContent};
`;

export const ProductContainer = styled.div`
    ${flex("center", "center")};
    flex-direction: column;
    width: 100%;

    @media screen and (min-width: 768px) {
        ${flex("flex-start", "center")};
        flex-direction: row;
        max-width: 121rem;
        margin: 0 auto;
    }
`;

export const ProductIMGContainer = styled.div`
    ${flex("center", "center")};
    flex-direction: column;
    align-items: center;

    width: 100%;
    background-color: #f2f2f2;

    @media screen and (min-width: 768px) {
        width: 100%;
        height: auto;
        margin-top: 2rem;
        padding: 0 2rem;
    }
`;

export const ProductIMG = styled.img`
    width: 20rem;
    height: auto;

    @media screen and (min-width: 768px) {
        width: 50rem;
        height: auto;
    }
`;

export const ProductInfoContainer = styled.div`
    ${flex("center", "center")};
    flex-direction: column;
    width: 90%;

    @media screen and (min-width: 768px) {
        margin-top: 2rem;
        padding: 0 2rem;
        width: 30%;
        height: 100%;
        gap: 1rem;
    }

    .separator {
        border-bottom: 2px solid #d0d0d0;
        width: 100%;
        height: 100%;
        padding: 1rem 0;
    }
`;

export const ProductInfo = styled.div`
    ${flex("flex-start", "flex-start")};
    flex-direction: column;
    @media screen and (min-width: 768px) {
        height: auto;
    }
`;

export const ProductCounter = styled.div`
    ${flex("center", "center")};

    gap: 2rem;
    color: coral;
    height: 1.5rem;
    padding-bottom: 5rem;

    button {
        display: block;
        background-color: coral;
        color: white;
        width: 1.5rem;
        height: 1.5rem;
        text-decoration: none;
        border: 1px solid transparent;
        border-radius: 5px;
    }
`;

export const ProductButtons = styled.div`
    ${flex("center", "center")};
    flex-direction: column;

    .cart {
        background-color: coral;
        text-decoration: none;
        border: 1px solid transparent;

        padding: 0.5rem;
        width: 20rem;
        color: white;
        font-size: 1rem;

        &:hover {
            background-color: #fd5a1e;
        }
    }
    .buy {
        background-color: white;
        text-decoration: none;
        border: 0.1rem solid coral;
        margin: 1rem 0;
        padding: 0.5rem;
        width: 20rem;
        color: coral;
        font-size: 1rem;

        &:hover {
            border-color: #fd5a1e;
        }
    }
`;

export const ProductsDescription = styled.div`
    padding: 2rem 0;
`;
