import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styles from './styles/Layout.module.scss';

function Layout({children}) {
    return (
        <div className={styles.layout}>
            <Navbar/>
            <main className={styles.main}>{children}</main>
            <Footer/>
        </div>
    );
}

export default Layout;