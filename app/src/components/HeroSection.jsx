import styled from "styled-components";
import HeroImg from "../assets/img/heroImg.png";
import HeroSubImg from "../assets/img/heroSubImg.png";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";

const HeroContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: white;`;

const HeroSubContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: center;
    max-width: 72rem;
    margin: 0 auto 4rem;
    padding-top: 13rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;`;

const HeroContent = styled.div`
    display: flex;
    flex-direction: column;`;

const HeroHeading = styled.h1`
    font-weight: 500;
    font-family: serif;
    font-size: 3rem;
    line-height: 1;
    margin-bottom: 4rem;
    max-width: 24rem;`;

const HeroDescription = styled.p`
    color: #4b5563;
    font-size: 0.875rem;
    max-width: 20rem;
    line-height: 1.75rem;`;

const HeroButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.25rem;
    margin-top: 2.25rem;`;

const HeroFirstButton = styled.a`
    background-color: #000000;
    font-family: serif;
    filter: drop-shadow(var(0 3px 3px rgb(0 0 0 / 0.12)));
    color: white;
    border-radius: 1rem 0.375rem 1rem 0.375rem;
    padding: 1rem 1.75rem;
    text-wrap: nowrap;`;

const HeroSecondButton = styled.a`
    background-color: #EA6D27;
    font-family: serif;
    filter: drop-shadow(var(0 3px 3px rgb(0 0 0 / 0.12)));
    color: white;
    border-radius: 1rem 0.375rem 1rem 0.375rem;
    padding: 1rem 1.75rem;
    text-wrap: nowrap;`;

const HeroSocialsCntainer = styled.div`
    margin-top: 4rem;`;

const HeroSocialsSubContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    color: #4b5563;
    align-items: center;`;

const HeroSocialsIcon = styled.div`
    cursor: pointer;
    border-radius: 9999px;
    border: 1px solid black;
    padding: 0.5rem;
    color: black;`;

const HeroImageContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-end;`;

const HeroImgMain = styled.img``;

const HeroImgSub = styled.img`
    position: absolute;
    bottom: 2rem;
    left: -12rem;`;

function Herosection() {
    return (
        <HeroContainer>
            <HeroSubContainer>
                <HeroContent>
                    <HeroHeading>We provide the best food for you</HeroHeading>
                    <HeroDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.</HeroDescription>
                    <HeroButtonsContainer>
                        <HeroFirstButton href="">Menu</HeroFirstButton>
                        <HeroSecondButton href="">Book a table</HeroSecondButton>
                    </HeroButtonsContainer>
                    <HeroSocialsCntainer>
                        <HeroSocialsSubContainer>
                            <HeroSocialsIcon><FaFacebookF/></HeroSocialsIcon>
                            <HeroSocialsIcon><FaInstagram/></HeroSocialsIcon>
                            <HeroSocialsIcon><FaTwitter/></HeroSocialsIcon>
                        </HeroSocialsSubContainer>
                    </HeroSocialsCntainer>
                </HeroContent>
                <HeroImageContainer>
                    <HeroImgMain src={HeroImg} alt=""/>
                    <HeroImgSub src={HeroSubImg} alt=""/>
                </HeroImageContainer>
            </HeroSubContainer>
        </HeroContainer>
    );
}

export default Herosection;
