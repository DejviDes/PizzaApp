import {useState} from "react";
import LogoImg from "../assets/img/logo.png";
import {RxHamburgerMenu} from "react-icons/rx";
import {IoClose} from "react-icons/io5";
import styles from "../styles/Navbar.module.scss";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navContainer}>
            <div className={styles.navSubContainer}>
                <div className={styles.logoContainer}>
                    <img className={styles.logo} src={LogoImg} alt=""/>
                    <h2 className={styles.logoText}>restaurant</h2>
                </div>
                <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
                    <li className={styles.navItem}>Menu</li>
                    <li className={styles.navItem}>Events</li>
                    <li className={styles.navItem}>Gallery</li>
                    <li className={styles.navItem}>About</li>
                    <li className={styles.navItem}>Contact</li>
                </ul>
                <a className={styles.navButton} href="">Book a table</a>
                <div className={styles.hamburgerContainer} onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <IoClose size={45}/> : <RxHamburgerMenu size={45}/>}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
