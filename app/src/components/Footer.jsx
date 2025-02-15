import Logo from "../assets/img/logo.png";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";

function Footer() {
    return (
        <footer
            style={{
                width: "100%",
                backgroundColor: "white",
                paddingTop: "2.5rem",
                paddingBottom: "6rem",
                marginTop: "15rem",
            }}
        >
            <div style={{maxWidth: "90rem", margin: "0 auto", padding: "0 2rem"}}>
                {/* Horná časť */}
                <div
                    style={{
                        display: "grid",
                        alignItems: "center",
                        gridTemplateColumns: "repeat(5, 1fr)",
                        gap: "2.5rem",
                    }}
                >
                    <div
                        style={{
                            gridColumn: "span 2",
                            display: "flex",
                            flexDirection: "row",
                            gap: "0.75rem",
                            alignItems: "center",
                            cursor: "pointer",
                        }}
                    >
                        <img
                            style={{marginBottom: "1.25rem"}}
                            src={Logo}
                            alt="Restaurant Logo"
                        />
                        <h2 style={{fontSize: "1.875rem", fontWeight: "600"}}>
                            restaurant
                        </h2>
                    </div>
                    <h2 style={{fontWeight: "600"}}>NAVIGATION</h2>
                    <h2 style={{fontWeight: "600"}}>DISHES</h2>
                    <h2 style={{fontWeight: "600"}}>FOLLOW US</h2>
                </div>

                {/* Spodná časť */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(5, 1fr)",
                        gap: "2.5rem",
                        fontSize: "0.875rem",
                        lineHeight: "1.25rem",
                        marginTop: "2rem",
                    }}
                >
                    {/* Popis + otváracie hodiny */}
                    <div style={{gridColumn: "span 2"}}>
                        <p style={{color: "#4B5563", marginBottom: "1.25rem"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore.
                        </p>

                        <h2 style={{fontWeight: "600", marginTop: "1.75rem"}}>
                            OPENING HOURS
                        </h2>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                marginTop: "1rem",
                            }}
                        >
                            <div style={{color: "#4B5563"}}>
                                <p>Monday - Friday</p>
                                <p>8:00 am to 9:00 pm</p>
                            </div>
                            <div style={{color: "#4B5563"}}>
                                <p>Saturday</p>
                                <p>8:00 am to 9:00 pm</p>
                            </div>
                            <div style={{color: "#4B5563"}}>
                                <p>Sunday</p>
                                <p>CLOSED</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigácia */}
                    <div>
                        <ul style={{color: "#4B5563", cursor: "pointer"}}>
                            <li style={{marginBottom: "0.5rem"}}>Menu</li>
                            <li style={{marginBottom: "0.5rem"}}>About us</li>
                            <li style={{marginBottom: "0.5rem"}}>Contact us</li>
                            <li>Main dishes</li>
                        </ul>
                    </div>

                    {/* Jedlá */}
                    <div>
                        <ul style={{color: "#4B5563", cursor: "pointer"}}>
                            <li style={{marginBottom: "0.5rem"}}>Fish & Viggies</li>
                            <li style={{marginBottom: "0.5rem"}}>Tofu Chili</li>
                            <li style={{marginBottom: "0.5rem"}}>Egg & Cucumber</li>
                            <li>Lumpia w/Sauce</li>
                        </ul>
                    </div>

                    {/* Sociálne siete */}
                    <div>
                        <div style={{display: "flex", gap: "1rem", color: "#4B5563"}}>
                            <div
                                style={{
                                    cursor: "pointer",
                                    borderRadius: "50%",
                                    border: "1px solid black",
                                    padding: "0.5rem",
                                    textAlign: "center",
                                }}
                            >
                                <FaFacebookF/>
                            </div>
                            <div
                                style={{
                                    cursor: "pointer",
                                    borderRadius: "50%",
                                    border: "1px solid black",
                                    padding: "0.5rem",
                                    textAlign: "center",
                                }}
                            >
                                <FaInstagram/>
                            </div>
                            <div
                                style={{
                                    cursor: "pointer",
                                    borderRadius: "50%",
                                    border: "1px solid black",
                                    padding: "0.5rem",
                                    textAlign: "center",
                                }}
                            >
                                <FaTwitter/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Oddelovač */}
                <div
                    style={{
                        height: "1px",
                        width: "100%",
                        backgroundColor: "#E5E7EB",
                        marginTop: "5rem",
                    }}
                ></div>

                {/* Copyright */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "1rem",
                    }}
                >
                    <p style={{color: "#4B5563", fontSize: "0.875rem"}}>
                        &copy;2025 Restaurants. All Right Reserved. Designed by David
                    </p>
                    <div style={{display: "flex", gap: "2.5rem"}}>
                        <p
                            style={{
                                color: "#4B5563",
                                fontSize: "0.875rem",
                                cursor: "pointer",
                            }}
                        >
                            Terms of Service
                        </p>
                        <p
                            style={{
                                color: "#4B5563",
                                fontSize: "0.875rem",
                                cursor: "pointer",
                            }}
                        >
                            Privacy Policy
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
