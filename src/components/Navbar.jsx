import {useState} from "react";
import LogoImg from "../assets/img/logo.png";
import {RxHamburgerMenu} from "react-icons/rx";
import {IoClose} from "react-icons/io5";
import styles from "../styles/NavBar.module.scss";
import {Link} from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navContainer}>
            <div className={styles.navSubContainer}>
                <Link to="/">
                    <div className={styles.logoContainer}>
                        <img className={styles.logo} src={LogoImg} alt=""/>
                        <h2 className={styles.logoText}>restaurant</h2>
                    </div>
                </Link>
                <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
                    <li className={styles.navItem}>Menu</li>
                    <li className={styles.navItem}>Events</li>
                    <li className={styles.navItem}>Gallery</li>
                    <li className={styles.navItem}>About</li>
                    <li className={styles.navItem}><Link to="/contact">Contact</Link></li>
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
