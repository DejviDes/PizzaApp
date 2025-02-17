import {useState} from "react";
import styled from "styled-components";
import LogoImg from "../assets/img/logo.png";
import {RxHamburgerMenu} from "react-icons/rx";
import {IoClose} from "react-icons/io5";

const NavContainer = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: white;
    z-index: 10;
`;

const NavSubContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 3rem 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media (max-width: 575px) {
        justify-content: space-between;
        padding: 3rem;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    align-items: center;
    cursor: pointer;
`;

const Logo = styled.img`
    margin-bottom: 1.25rem;
`;

const LogoText = styled.h2`
    display: none;

    @media (max-width: 575px) {
        display: block;
        font-size: 1.875rem;
        line-height: 2.25rem;
        font-weight: 600;
    }

    @media (min-width: 992px) {
        display: block;
        font-size: 1.875rem;
        line-height: 2.25rem;
        font-weight: 600;
    }
`;

const NavLinks = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 2.5rem;
    color: #4b5563;

    @media (max-width: 575px) {
        display: ${(props) => (props.open ? "flex" : "none")};
        flex-direction: column;
        position: absolute;
        top: 120px;
        left: 0;
        width: 100%;
        background: white;
        padding: 2rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
`;

const HamburgerContainer = styled.div`
    display: none;

    @media (max-width: 575px) {
        display: block;
    }
`;

const NavItem = styled.li`
    cursor: pointer;
`;

const NavButton = styled.a`
    background-color: #EA6D27;
    font-family: serif;
    filter: drop-shadow(0 3px 3px rgb(0 0 0 / 0.12));
    color: white;
    border-radius: 1rem 0.375rem 1rem 0.375rem;
    padding: 1.25rem 1.75rem;
    white-space: nowrap;

    @media (max-width: 575px) {
        display: none;
    }
`;

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <NavContainer>
            <NavSubContainer>
                <LogoContainer>
                    <Logo src={LogoImg} alt=""/>
                    <LogoText>restaurant</LogoText>
                </LogoContainer>
                <NavLinks open={menuOpen}>
                    <NavItem>Menu</NavItem>
                    <NavItem>Events</NavItem>
                    <NavItem>Gallery</NavItem>
                    <NavItem>About</NavItem>
                    <NavItem>Contact</NavItem>
                </NavLinks>
                <NavButton href="">Book a table</NavButton>
                <HamburgerContainer onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <IoClose size={45}/> : <RxHamburgerMenu size={45}/>}
                </HamburgerContainer>
            </NavSubContainer>
        </NavContainer>
    );
}

export default Navbar;
