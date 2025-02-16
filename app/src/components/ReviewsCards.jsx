import styled from 'styled-components';
import {Star} from 'lucide-react';
import Person1Img from '../assets/img/person1.png';

// Styled components for the card layout
const ReviewContainer = styled.div`
    width: 100%;
    margin-bottom: 15rem;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;
    justify-content: center;
    max-width: 80rem;
    margin: 0 auto;
`;

const ReviewCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 6rem 2rem 6rem 2rem;
    max-width: fit-content;
    padding: 2rem 4rem;
    box-shadow: 20px 20px 30px -8px rgba(0, 0, 0, 0.05);
    margin-bottom: 3rem;
`;

const ReviewImg = styled.img`
    border-radius: 9999px;
    position: absolute;
    top: -60px;
`;

const Stars = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    margin-top: 2.5rem;
`;

const ReviewText = styled.p`
    color: #4b5563;
    line-height: 1.5rem;
    font-size: 0.875rem;
    max-width: 20rem;
    margin-bottom: 1.5rem;
    text-align: center;
`;

const Name = styled.h4`
    font-weight: 500;
`;

const Role = styled.p`
    color: #4b5563;
    line-height: 1.5rem;
    font-size: 0.875rem;
    max-width: 20rem;
`;

function ReviewCards() {
    return (
        <ReviewContainer>
            <Grid>
                <ReviewCard>
                    <ReviewImg src={Person1Img} alt=""/>
                    <Stars>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                    </Stars>
                    <ReviewText>
                        Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque
                        penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac
                        eu aliquam quis. Ornare tincidunt tempus semper
                    </ReviewText>
                    <Name>Ama Ampomah</Name>
                    <Role>CEO & Founder Inc</Role>
                </ReviewCard>

                {/* Duplicate the ReviewCard component for more static review cards */}

                <ReviewCard>
                    <ReviewImg src={Person1Img} alt=""/>
                    <Stars>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                    </Stars>
                    <ReviewText>
                        Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque
                        penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac
                        eu aliquam quis. Ornare tincidunt tempus semper
                    </ReviewText>
                    <Name>Ama Ampomah</Name>
                    <Role>CEO & Founder Inc</Role>
                </ReviewCard>
                <ReviewCard>
                    <ReviewImg src={Person1Img} alt=""/>
                    <Stars>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                    </Stars>
                    <ReviewText>
                        Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque
                        penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac
                        eu aliquam quis. Ornare tincidunt tempus semper
                    </ReviewText>
                    <Name>Ama Ampomah</Name>
                    <Role>CEO & Founder Inc</Role>
                </ReviewCard>
                <ReviewCard>
                    <ReviewImg src={Person1Img} alt=""/>
                    <Stars>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                    </Stars>
                    <ReviewText>
                        Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque
                        penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac
                        eu aliquam quis. Ornare tincidunt tempus semper
                    </ReviewText>
                    <Name>Ama Ampomah</Name>
                    <Role>CEO & Founder Inc</Role>
                </ReviewCard>
                <ReviewCard>
                    <ReviewImg src={Person1Img} alt=""/>
                    <Stars>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                    </Stars>
                    <ReviewText>
                        Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque
                        penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac
                        eu aliquam quis. Ornare tincidunt tempus semper
                    </ReviewText>
                    <Name>Ama Ampomah</Name>
                    <Role>CEO & Founder Inc</Role>
                </ReviewCard>
                <ReviewCard>
                    <ReviewImg src={Person1Img} alt=""/>
                    <Stars>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                    </Stars>
                    <ReviewText>
                        Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque
                        penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac
                        eu aliquam quis. Ornare tincidunt tempus semper
                    </ReviewText>
                    <Name>Ama Ampomah</Name>
                    <Role>CEO & Founder Inc</Role>
                </ReviewCard>
                <ReviewCard>
                    <ReviewImg src={Person1Img} alt=""/>
                    <Stars>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                    </Stars>
                    <ReviewText>
                        Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque
                        penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac
                        eu aliquam quis. Ornare tincidunt tempus semper
                    </ReviewText>
                    <Name>Ama Ampomah</Name>
                    <Role>CEO & Founder Inc</Role>
                </ReviewCard> <ReviewCard>
                <ReviewImg src={Person1Img} alt=""/>
                <Stars>
                    <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                    <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                    <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                    <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                    <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                </Stars>
                <ReviewText>
                    Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque
                    penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac
                    eu aliquam quis. Ornare tincidunt tempus semper
                </ReviewText>
                <Name>Ama Ampomah</Name>
                <Role>CEO & Founder Inc</Role>
            </ReviewCard> <ReviewCard>
                <ReviewImg src={Person1Img} alt=""/>
                <Stars>
                    <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                    <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                    <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                    <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                    <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                </Stars>
                <ReviewText>
                    Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque
                    penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac
                    eu aliquam quis. Ornare tincidunt tempus semper
                </ReviewText>
                <Name>Ama Ampomah</Name>
                <Role>CEO & Founder Inc</Role>
            </ReviewCard>

                {/* Add more ReviewCard components as needed */}

            </Grid>
        </ReviewContainer>
    );
}

export default ReviewCards;