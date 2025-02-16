import styled from "styled-components";
import HeroImg from "../assets/img/heroImg.png";
import HeroSubImg from "../assets/img/heroSubImg.png";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";

const HeroContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: white;
`;

const HeroSubContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: center;
    max-width: 72rem;
    margin: 0 auto 4rem;
    padding-top: 13rem;
    padding-left: 2.5rem;
    paddin-right: 2.5rem;
`;

const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const HeroHeading = styled.h1`
    font-weight: 500;
    font-family: serif;
    font-size: 3rem;
    line-height: 1;
    margin-bottom: 4rem;
    max-width: 24rem;
`;

function Herosection() {
    return (
        <HeroContainer>
            <HeroSubContainer>
                <HeroContent>
                    <HeroHeading>
                        We provide the best food for you
                    </HeroHeading>
                    <p
                        style={{
                            color: "#4b5563",
                            fontSize: "0.875rem",
                            maxWidth: "20rem",
                            lineHeight: "1.75rem",
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "1.25rem",
                            marginTop: "2.25rem",
                        }}
                    >
                        <a
                            style={{
                                backgroundColor: "#000000",
                                fontFamily: "serif",
                                filter: "drop-shadow(var(0 3px 3px rgb(0 0 0 / 0.12)))",
                                color: "white",
                                borderTopLeftRadius: "1rem",
                                borderBottomRightRadius: "1rem",
                                borderTopRightRadius: "0.375rem",
                                borderBottomLeftRadius: "0.375rem",
                                paddingTop: "1rem",
                                paddingBottom: "1rem",
                                paddingLeft: "1.75rem",
                                paddingRight: "1.75rem",
                                textWrap: "nowrap",
                            }}
                            href=""
                        >
                            Menu
                        </a>
                        <a
                            style={{
                                backgroundColor: "#EA6D27",
                                fontFamily: "serif",
                                filter: "drop-shadow(var(0 3px 3px rgb(0 0 0 / 0.12)))",
                                color: "white",
                                borderTopLeftRadius: "1rem",
                                borderBottomRightRadius: "1rem",
                                borderTopRightRadius: "0.375rem",
                                borderBottomLeftRadius: "0.375rem",
                                paddingTop: "1rem",
                                paddingBottom: "1rem",
                                paddingLeft: "1.75rem",
                                paddingRight: "1.75rem",
                                textWrap: "nowrap",
                            }}
                            href=""
                        >
                            Book a table
                        </a>
                    </div>
                    <div style={{marginTop: "4rem"}}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "1rem",
                                color: "#4b5563",
                                alignItems: "center",
                            }}
                        >
                            <div
                                style={{
                                    cursor: "pointer",
                                    borderRadius: "9999px",
                                    border: "1px solid black",
                                    padding: "0.5rem",
                                    color: "black",
                                }}
                            >
                                <FaFacebookF/>
                            </div>
                            <div
                                style={{
                                    cursor: "pointer",
                                    borderRadius: "9999px",
                                    border: "1px solid black",
                                    padding: "0.5rem",
                                    color: "black",
                                }}
                            >
                                <FaInstagram/>
                            </div>
                            <div
                                style={{
                                    cursor: "pointer",
                                    borderRadius: "9999px",
                                    border: "1px solid black",
                                    padding: "0.5rem",
                                    color: "black",
                                }}
                            >
                                <FaTwitter/>
                            </div>
                            <div
                                style={{
                                    height: "0px",
                                    width: "8rem",
                                    border: "1px solid #e5e7eb",
                                }}
                            ></div>
                        </div>
                    </div>
                </HeroContent>
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <img src={HeroImg} alt=""/>
                    <img
                        style={{position: "absolute", bottom: "2rem", left: "-12rem"}}
                        src={HeroSubImg}
                        alt=""
                    />
                </div>
            </HeroSubContainer>
        </HeroContainer>
    );
}

export default Herosection;
