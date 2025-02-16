import styled from "styled-components";
import Logo from "../assets/img/logo.png";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";

const FooterContainer = styled.footer`
    width: 100%;
    background-color: white;
    padding-top: 2.5rem;
    padding-bottom: 6rem;
    margin-top: 15rem;
`;

const FooterContent = styled.div`
    max-width: 90rem;
    margin: 0 auto;
    padding: 0 2rem;
`;

const GridContainer = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(5, 1fr);
    gap: 2.5rem;
`;

const LogoContainer = styled.div`
    grid-column: span 2;
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    align-items: center;
    cursor: pointer;
`;

const SectionTitle = styled.h2`
    font-weight: 600;
`;

const Description = styled.p`
    color: #4b5563;
    margin-bottom: 1.25rem;
`;

const OpeningHours = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 1rem;
    color: #4b5563;
`;

const List = styled.ul`
    color: #4b5563;
    cursor: pointer;
`;

const ListItem = styled.li`
    margin-bottom: 0.5rem;
`;

const SocialIcons = styled.div`
    display: flex;
    gap: 1rem;
    color: #4b5563;
`;

const SocialIcon = styled.div`
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid black;
    padding: 0.5rem;
    text-align: center;
    color: black;
`;

const Divider = styled.div`
    height: 1px;
    width: 100%;
    background-color: #e5e7eb;
    margin-top: 5rem;
`;

const FooterBottom = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    color: #4b5563;
    font-size: 0.875rem;
`;

const FooterLinks = styled.div`
    display: flex;
    gap: 2.5rem;
    cursor: pointer;
`;

function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <GridContainer>
                    <LogoContainer>
                        <img src={Logo} alt="Restaurant Logo"/>
                        <h2 style={{fontSize: "1.875rem", fontWeight: "600"}}>restaurant</h2>
                    </LogoContainer>
                    <SectionTitle>NAVIGATION</SectionTitle>
                    <SectionTitle>DISHES</SectionTitle>
                    <SectionTitle>FOLLOW US</SectionTitle>
                </GridContainer>

                <GridContainer style={{marginTop: "2rem", fontSize: "0.875rem", lineHeight: "1.25rem"}}>
                    <div style={{gridColumn: "span 2"}}>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore.
                        </Description>
                        <SectionTitle>OPENING HOURS</SectionTitle>
                        <OpeningHours>
                            <div>
                                <p>Monday - Friday</p>
                                <p>8:00 am to 9:00 pm</p>
                            </div>
                            <div>
                                <p>Saturday</p>
                                <p>8:00 am to 9:00 pm</p>
                            </div>
                            <div>
                                <p>Sunday</p>
                                <p>CLOSED</p>
                            </div>
                        </OpeningHours>
                    </div>
                    <List>
                        <ListItem>Menu</ListItem>
                        <ListItem>About us</ListItem>
                        <ListItem>Contact us</ListItem>
                        <li>Main dishes</li>
                    </List>
                    <List>
                        <ListItem>Fish & Viggies</ListItem>
                        <ListItem>Tofu Chili</ListItem>
                        <ListItem>Egg & Cucumber</ListItem>
                        <li>Lumpia w/Sauce</li>
                    </List>
                    <SocialIcons>
                        <SocialIcon>
                            <FaFacebookF/>
                        </SocialIcon>
                        <SocialIcon>
                            <FaInstagram/>
                        </SocialIcon>
                        <SocialIcon>
                            <FaTwitter/>
                        </SocialIcon>
                    </SocialIcons>
                </GridContainer>

                <Divider/>

                <FooterBottom>
                    <p>&copy;2025 Restaurants. All Right Reserved. Designed by David</p>
                    <FooterLinks>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                    </FooterLinks>
                </FooterBottom>
            </FooterContent>
        </FooterContainer>
    );
}

export default Footer;