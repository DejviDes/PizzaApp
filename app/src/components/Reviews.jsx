import styled from "styled-components";
import ReviewsCards from "./ReviewsCards";
import NewLetterImg from "../assets/img/newsletter.png";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f3f4f6;
    position: relative;
`;

const HeaderSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 11rem;
`;

const Heading = styled.h1`
    text-align: center;
    font-weight: 500;
    font-family: serif;
    font-size: 3rem;
    line-height: 1rem;
    margin-top: 4rem;
    margin-bottom: 3rem;
`;

const Subheading = styled.p`
    max-width: 20rem;
    font-size: 0.875rem;
    line-height: 1.5rem;
    text-align: center;
    color: #4b5563;
`;

const NewsletterSection = styled.div`
    position: absolute;
    bottom: -12.5rem;
`;

const NewsletterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

const NewsletterImage = styled.img`
    margin-top: 10rem;
`;

const PromoText = styled.h1`
    font-weight: 500;
    font-family: serif;
    font-size: 3.25rem;
    text-align: center;
    max-width: 45rem;
    position: absolute;
    top: 12.5rem;
    color: white;
    letter-spacing: 0.1rem;
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 3.5rem;
`;

const InputContainer = styled.div`
    position: relative;
`;

const EmailInput = styled.input`
    width: 42.5rem;
    height: 5rem;
    border-radius: 1.5rem;
    border: none;
    padding: 0 1rem;
    margin-top: 2.5rem;
    background-color: white;
    color: #4b5563;
`;

const SubscribeButton = styled.button`
    width: 10rem;
    height: 3.5rem;
    border-radius: 1rem;
    border: none;
    padding: 0 1rem;
    margin-top: 1rem;
    background-color: #ea6d27;
    color: white;
    font-weight: 600;
    position: absolute;
    bottom: 0.75rem;
    right: 1rem;
`;

function Reviews() {
    return (
        <Container>
            <HeaderSection>
                <Heading>Our Happy Customers</Heading>
                <Subheading>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </Subheading>
            </HeaderSection>
            <ReviewsCards/>
            <NewsletterSection>
                <NewsletterContent>
                    <NewsletterImage src={NewLetterImg} alt=""/>
                    <PromoText>Get Or Promo Code by Subscribing To our Newsletter</PromoText>
                    <InputWrapper>
                        <InputContainer>
                            <EmailInput type="text" placeholder="Enter Your Email"/>
                            <SubscribeButton>Subscribe</SubscribeButton>
                        </InputContainer>
                    </InputWrapper>
                </NewsletterContent>
            </NewsletterSection>
        </Container>
    );
}

export default Reviews;