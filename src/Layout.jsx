import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styles from './styles/Layout.module.scss';
import PropTypes from 'prop-types';

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

function Layout({children}) {
    return (
        <div className={styles.layout}>
            <Navbar/>
            <main className={styles.main}>{children}</main>
        </div>
    );
}

export default Layout;