import styles from '../styles/Footer.module.scss';
import Logo from "../assets/img/logo.png";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";

function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <div className={styles.gridContainerFirst}>
                    <div className={styles.logoContainer}>
                        <img style={{marginBottom: "1.25rem"}} src={Logo} alt="Restaurant Logo"/>
                        <h2 style={{fontSize: "1.875rem", fontWeight: "600"}}>restaurant</h2>
                    </div>
                    <h2 className={styles.sectionTitle}>NAVIGATION</h2>
                    <h2 className={styles.sectionTitle}>DISHES</h2>
                    <h2 className={styles.sectionTitle}>FOLLOW US</h2>
                </div>

                <div className={styles.gridContainerSecond}
                     style={{marginTop: "1rem", fontSize: "0.875rem", lineHeight: "1.25rem"}}>
                    <div style={{gridColumn: "span 2"}}>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore.
                        </p>
                        <h2 className={styles.sectionTitle}>OPENING HOURS</h2>
                        <div className={styles.openingHours}>
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
                        </div>
                    </div>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Menu</li>
                        <li className={styles.listItem}>About us</li>
                        <li className={styles.listItem}>Contact us</li>
                        <li>Main dishes</li>
                    </ul>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Fish & Viggies</li>
                        <li className={styles.listItem}>Tofu Chili</li>
                        <li className={styles.listItem}>Egg & Cucumber</li>
                        <li>Lumpia w/Sauce</li>
                    </ul>
                    <div className={styles.socialIcons}>
                        <div className={styles.socialIcon}>
                            <FaFacebookF/>
                        </div>
                        <div className={styles.socialIcon}>
                            <FaInstagram/>
                        </div>
                        <div className={styles.socialIcon}>
                            <FaTwitter/>
                        </div>
                    </div>
                </div>

                <div className={styles.divider}/>

                <div className={styles.footerBottom}>
                    <p>&copy;2025 Restaurants. All Right Reserved. Designed by David</p>
                    <div className={styles.footerLinks}>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;