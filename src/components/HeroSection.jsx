import styles from "../styles/Herosection.module.scss";
import HeroImg from "../assets/img/heroImg.png";
import HeroSubImg from "../assets/img/heroSubImg.png";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";

{/*@media (max-width: 575px) {}
@media (min-width: 576px) {}
@media (min-width: 768px) {}
@media (min-width: 992px) {}
@media (min-width: 1200px) {}*/
}

function HeroSection() {
    return (
        <div className={styles.HeroContainer}>
            <div className={styles.HeroSubContainer}>
                <div className={styles.HeroContent}>
                    <h1 className={styles.HeroHeading}>We provide the best food for you</h1>
                    <p className={styles.HeroDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className={styles.HeroButtonsContainer}>
                        <a className={styles.HeroFirstButton} href="">Menu</a>
                        <a className={styles.HeroSecondButton} href="">Book a table</a>
                    </div>
                    <div className={styles.HeroSocialsContainer}>
                        <div className={styles.HeroSocialsSubContainer}>
                            <div className={styles.HeroSocialsIcon}><FaFacebookF/></div>
                            <div className={styles.HeroSocialsIcon}><FaInstagram/></div>
                            <div className={styles.HeroSocialsIcon}><FaTwitter/></div>
                            <div className={styles.HeroSocialsLine}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.HeroImageContainer}>
                    <img className={styles.HeroImgMain} src={HeroImg} alt=""/>
                    <img className={styles.HeroImgSub} src={HeroSubImg} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
