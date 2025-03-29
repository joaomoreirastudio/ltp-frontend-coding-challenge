import styled from "styled-components";
const flex = (alignItems: string, justifyContent: string) => `
  display: flex;
  align-items: ${alignItems};
  justify-content: ${justifyContent};
`;

export const NavbarContainer = styled.div`
    ${flex("center", "space-between")}
    height: 1rem;
    padding: 3rem 3rem 2rem 2rem;
    color: white;
    background-color: coral;
`;

export const NavbarMenu = styled.div`
    ${flex("center", "space-between")};
    flex-direction: column;
    margin-bottom: 16px;
    @media screen and (min-width: 768px) {
        ${flex("center", "center")};
        gap: 1rem;
        color: black;
        width: 100%;
    }
`;

export const NavbarMenuDesktop = styled.div`
    display: none;
    font-size: 16px;
    @media screen and (min-width: 768px) {
        ${flex("center", "center")};
        display: block;
    }
`;

export const NavBarLogo = styled.div`
    padding: 1rem;
    font-family: "Bebas", sans-serif;
    font-size: 1rem;
    font-weight: 400;

    @media screen and (min-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const NavBarList = styled.li`
    ${flex("center", "space-between")};
    font-size: 1rem;
`;

export const NavBarListContainer = styled.ul`
    ${flex("center", "center")};
    flex-direction: column;
    padding: 2rem 0;
    gap: 1rem;
    @media screen and (min-width: 768px) {
        ${flex("center", "center")};
        flex-direction: row;
        margin-left: auto;
        padding: 0;
        gap: 2rem;
    }
`;
export const NavBarIconsDesktop = styled.div`
    display: none;
    @media screen and (min-width: 768px) {
        ${flex("center", "center")};
        gap: 2rem;
    }
`;
export const NavBarIcons = styled.div`
    ${flex("center", "center")};
    flex-direction: row;
    gap: 1rem;
    @media screen and (min-width: 768px) {
    }
`;

export const SearchIcon = styled.div`
    width: 1.5rem;
    height: 1.5rem;
`;

export const HamburgerContainer = styled.div`
    display: block; // Garante que esteja visível por padrão
    position: absolute; // Posiciona o container de forma absoluta
    right: 0.5rem;

    @media screen and (min-width: 768px) {
        display: none; // Esconde o container em telas maiores que 768px
    }
`;
