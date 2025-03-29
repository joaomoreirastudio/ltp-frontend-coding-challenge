import {
    NavbarContainer,
    NavbarMenu,
    NavBarLogo,
    NavBarListContainer,
    NavBarList,
    HamburgerContainer,
    NavbarMenuDesktop,
    NavBarIcons,
    SearchIcon,
    NavBarIconsDesktop,
} from "./NavBar.styled.js";
import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";
// import { FaChevronDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleHamburgerClick = () => {
        setMenuOpen(!menuOpen);
    };
    const handleProducts = () => {
        navigate("/");
    };
    return (
        <>
            <NavbarContainer>
                <NavBarLogo onClick={handleProducts}>
                    THE ONLINE STORE
                </NavBarLogo>
                <NavbarMenuDesktop>
                    <NavBarListContainer>
                        <NavBarList>Home</NavBarList>
                        <NavBarList onClick={handleProducts}>Shop</NavBarList>
                        <NavBarList>Deals</NavBarList>
                        <NavBarList>Contact</NavBarList>
                        <NavBarList>About</NavBarList>
                    </NavBarListContainer>
                </NavbarMenuDesktop>
                <NavBarIconsDesktop>
                    <SearchIcon>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </SearchIcon>
                    <SearchIcon>
                        <FontAwesomeIcon icon={faUser} />
                    </SearchIcon>
                    <SearchIcon>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </SearchIcon>
                </NavBarIconsDesktop>
                <HamburgerContainer>
                    <Hamburger
                        toggled={menuOpen}
                        toggle={handleHamburgerClick}
                    />
                </HamburgerContainer>
            </NavbarContainer>
            <NavbarMenu>
                {menuOpen && (
                    <>
                        <NavBarListContainer>
                            <NavBarList>Home</NavBarList>
                            <NavBarList onClick={handleProducts}>
                                Shop
                            </NavBarList>
                            <NavBarList>Deals</NavBarList>
                            <NavBarList>Contact</NavBarList>
                            <NavBarList>About</NavBarList>
                        </NavBarListContainer>
                        <NavBarIcons>
                            <SearchIcon>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </SearchIcon>
                            <SearchIcon>
                                <FontAwesomeIcon icon={faUser} />
                            </SearchIcon>
                            <SearchIcon>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </SearchIcon>
                        </NavBarIcons>
                    </>
                )}
            </NavbarMenu>
        </>
    );
};

export default NavBar;
