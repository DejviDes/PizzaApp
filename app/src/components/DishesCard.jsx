import Pizza1 from "../assets/img/pizza1.png";
import Pizza2 from "../assets/img/pizza2.png";
import Pizza3 from "../assets/img/pizza3.png";
import Pizza4 from "../assets/img/pizza4.png";

import styled from "styled-components";

const DishesCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 80rem;
    margin: 0 auto;
    gap: 3rem;
    padding-bottom: 6rem;`;

const DishesCardSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;`;

const DishesSubCard = styled.div`
    position: relative;
    background-color: #f3f4f6;
    border: 4px solid white;
    border-radius: 3rem 0.75rem 3rem 0.75rem;
    padding: 1.25rem;`;

const DishesImgContainer = styled.div`
    position: absolute;
    top: -6rem;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;`;

const DishesImgSubContainer = styled.div`
    position: relative;`;

const DishesMainImg = styled.img``;

const DishesPrice = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 0;
    border-radius: 50%;
    background-color: black;
    width: 3.5rem;
    height: 3.5rem;
    color: white;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;`;

const DishesCardHeading = styled.h3`
    font-family: serif;
    font-weight: 500;
    font-size: 1.125rem;
    margin-bottom: 1.25rem;
    margin-top: 9rem;
    text-align: center;`;

const DishesCardDescription = styled.p`
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: #4b5563;
    text-align: center;
    margin-bottom: 3rem;`;

function DishesCard() {
    return (
        <DishesCardContainer>
            <DishesCardSubContainer>
                <DishesSubCard>
                    <DishesImgContainer>
                        <DishesImgSubContainer>
                            <DishesMainImg src={Pizza1} alt=""/>
                            <DishesPrice>$12</DishesPrice>
                        </DishesImgSubContainer>
                    </DishesImgContainer>
                    <DishesCardHeading>Lumpia with Sauce</DishesCardHeading>
                    <DishesCardDescription>Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod
                        tempor</DishesCardDescription>
                </DishesSubCard>
            </DishesCardSubContainer>
            <DishesCardSubContainer>
                <DishesSubCard>
                    <DishesImgContainer>
                        <DishesImgSubContainer>
                            <DishesMainImg src={Pizza2} alt=""/>
                            <DishesPrice>$15</DishesPrice>
                        </DishesImgSubContainer>
                    </DishesImgContainer>
                    <DishesCardHeading>Chicken with Sauce</DishesCardHeading>
                    <DishesCardDescription>Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod
                        tempor</DishesCardDescription>
                </DishesSubCard>
            </DishesCardSubContainer>
            <DishesCardSubContainer>
                <DishesSubCard>
                    <DishesImgContainer>
                        <DishesImgSubContainer>
                            <DishesMainImg src={Pizza3} alt=""/>
                            <DishesPrice>$20</DishesPrice>
                        </DishesImgSubContainer>
                    </DishesImgContainer>
                    <DishesCardHeading>Beef with Sauce</DishesCardHeading>
                    <DishesCardDescription>Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod
                        tempor</DishesCardDescription>
                </DishesSubCard>
            </DishesCardSubContainer>
            <DishesCardSubContainer>
                <DishesSubCard>
                    <DishesImgContainer>
                        <DishesImgSubContainer>
                            <DishesMainImg src={Pizza4} alt=""/>
                            <DishesPrice>$25</DishesPrice>
                        </DishesImgSubContainer>
                    </DishesImgContainer>
                    <DishesCardHeading>Shrimp with Sauce</DishesCardHeading>
                    <DishesCardDescription>Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod
                        tempor</DishesCardDescription>
                </DishesSubCard>
            </DishesCardSubContainer>
        </DishesCardContainer>
    );
}

export default DishesCard;
