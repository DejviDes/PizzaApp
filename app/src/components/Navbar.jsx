import styled from "styled-components";
import LogoImg from "../assets/img/logo.png";

const NavContainer = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: white;
    z-index: 10;`;

const NavSubContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 3rem 0;`;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    align-items: center;
    cursor: pointer;`;

const Logo = styled.img`
    margin-bottom: 1.25rem;`;

const LogoText = styled.h2`
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 600;`;

const NavLinks = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 2.5rem;
    color: #4b5563;`;

const NavItem = styled.li`
    cursor: pointer;`;

const NavButton = styled.a`
    background-color: #EA6D27;
    font-family: serif;
    filter: drop-shadow(0 3px 3px rgb(0 0 0 / 0.12));
    color: white;
    border-radius: 1rem 0.375rem 1rem 0.375rem;
    padding: 1.25rem 1.75rem;
    white-space: nowrap;`;

function Navbar() {
    return (
        <NavContainer>
            <NavSubContainer>
                <LogoContainer>
                    <Logo src={LogoImg} alt=""/>
                    <LogoText>restaurant</LogoText>
                </LogoContainer>
                <NavLinks>
                    <NavItem>Menu</NavItem>
                    <NavItem>Events</NavItem>
                    <NavItem>Gallery</NavItem>
                    <NavItem>About</NavItem>
                    <NavItem>Contact</NavItem>
                </NavLinks>
                <NavButton href="">Book a table</NavButton>
            </NavSubContainer>
        </NavContainer>
    );
}

export default Navbar;
