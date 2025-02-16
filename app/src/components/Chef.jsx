import styled from "styled-components";
import ChefImg from "../assets/img/chef.png";

const Container = styled.div``;

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 1.25rem;
    align-items: center;
    max-width: 72rem;
    margin: 6rem auto;
    padding: 0 2.5rem;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Heading = styled.h1`
    font-weight: 500;
    font-family: serif;
    font-size: 3rem;
    margin-bottom: 3rem;
    max-width: 20rem;
`;

const Paragraph = styled.p`
    color: #4b5563;
    line-height: 1.5rem;
    font-size: 0.875rem;
    max-width: 18rem;
`;

const ListWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 0.875rem;
    color: #4b5563;
    margin-top: 3rem;
    margin-bottom: 2rem;
`;

const List = styled.ul`
    max-width: 15rem;
`;

const ListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
`;

const Checkmark = styled.span`
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ea6d27;
    color: white;
    border-radius: 50%;
    margin-right: 0.75rem;
    flex-shrink: 0;
    font-size: 0.75rem;
    font-weight: bold;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.25rem;
    margin-top: 2.25rem;
    margin-left: 5rem;
`;

const ButtonBlack = styled.a`
    background-color: #000;
    font-family: serif;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    color: white;
    border-radius: 1rem 0.375rem 1rem 0.375rem;
    padding: 1rem 1.75rem;
    white-space: nowrap;
    text-decoration: none;
`;

const ButtonOrange = styled.a`
    background-color: #ea6d27;
    font-family: serif;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    color: white;
    border-radius: 1rem 0.375rem 1rem 0.375rem;
    padding: 1rem 1.75rem;
    white-space: nowrap;
    text-decoration: none;
`;

const ImageWrapper = styled.div`
    display: flex;
`;

function Chef() {
    return (
        <Container>
            <GridWrapper>
                <ContentWrapper>
                    <Heading>Our Expert Chef</Heading>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </Paragraph>
                    <ListWrapper>
                        <List>
                            <ListItem><Checkmark>✓</Checkmark><span>Lorem ipsum dolor sit amet, consectetur</span></ListItem>
                            <ListItem><Checkmark>✓</Checkmark><span>Lorem ipsum dolor sit amet, consectetur</span></ListItem>
                            <ListItem><Checkmark>✓</Checkmark><span>Lorem ipsum dolor sit amet, consectetur</span></ListItem>
                        </List>
                        <List>
                            <ListItem><Checkmark>✓</Checkmark><span>Lorem ipsum dolor sit amet, consectetur</span></ListItem>
                            <ListItem><Checkmark>✓</Checkmark><span>Lorem ipsum dolor sit amet, consectetur</span></ListItem>
                            <ListItem><Checkmark>✓</Checkmark><span>Lorem ipsum dolor sit amet, consectetur</span></ListItem>
                        </List>
                    </ListWrapper>
                    <ButtonWrapper>
                        <ButtonBlack href="">Menu</ButtonBlack>
                        <ButtonOrange href="">Book a table</ButtonOrange>
                    </ButtonWrapper>
                </ContentWrapper>
                <ImageWrapper>
                    <img src={ChefImg} alt=""/>
                </ImageWrapper>
            </GridWrapper>
        </Container>
    );
}

export default Chef;
