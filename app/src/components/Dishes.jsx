import styled from "styled-components";

import DishesCard from "./DishesCard";
import DishesMain from "./DishesMain";

const DishesContainer = styled.div`
    background-color: #f3f4f6;`;

const DishesTopContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 11rem;`;

const DishesHeading = styled.h1`
    text-align: center;
    font-weight: 500;
    font-family: serif;
    font-size: 3rem;
    line-height: 1rem;
    margin-top: 4rem;
    margin-bottom: 3rem;`;

const DishesDescription = styled.p`
    max-width: 20rem;
    font-size: 0.875rem;
    line-height: 1.5rem;
    text-align: center;`;

function Dishes() {
    return (
        <DishesContainer>
            <DishesTopContainer>
                <DishesHeading>Our Special Dishes</DishesHeading>
                <DishesDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt</DishesDescription>
            </DishesTopContainer>
            <DishesCard/>
            <DishesMain/>
        </DishesContainer>
    );
}

export default Dishes;
