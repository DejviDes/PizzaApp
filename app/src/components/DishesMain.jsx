import styled from "styled-components";
import DishesMainImg from "../assets/img/dishesMainImg.png";

const Container = styled.div`
    padding-bottom: 8rem;
`;

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    max-width: 80rem;
    margin: 4rem auto;
    padding: 0 2.5rem;
`;

const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Heading = styled.h1`
    font-weight: 500;
    font-family: serif;
    font-size: 3rem;
    margin-bottom: 4rem;
    max-width: 20rem;
`;

const Paragraph = styled.p`
    color: #4b5563;
    line-height: 1.5rem;
    font-size: 0.875rem;
    max-width: 18rem;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.25rem;
    margin-top: 2.25rem;
`;

const ButtonBlack = styled.a`
    background-color: #000000;
    font-family: serif;
    filter: drop-shadow(var(0 3px 3px rgb(0 0 0 / 0.12)));
    color: white;
    border-radius: 1rem 0.375rem 1rem 0.375rem;
    padding: 1rem 1.75rem;
    text-wrap: nowrap;`;

const ButtonOrange = styled.a`
    background-color: #EA6D27;
    font-family: serif;
    filter: drop-shadow(var(0 3px 3px rgb(0 0 0 / 0.12)));
    color: white;
    border-radius: 1rem 0.375rem 1rem 0.375rem;
    padding: 1rem 1.75rem;
    text-wrap: nowrap;`;

function DishesMain() {
    return (
        <Container>
            <GridWrapper>
                <ImageWrapper>
                    <img src={DishesMainImg} alt=""/>
                </ImageWrapper>
                <ContentWrapper>
                    <div>
                        <Heading>Welcome to Our Restaurant</Heading>
                        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut
                            labore et dolore magna aliqua.</Paragraph>
                        <ButtonWrapper>
                            <ButtonBlack href="">Menu</ButtonBlack>
                            <ButtonOrange href="">Book a table</ButtonOrange>
                        </ButtonWrapper>
                    </div>
                </ContentWrapper>
            </GridWrapper>
        </Container>
    );
}

export default DishesMain;