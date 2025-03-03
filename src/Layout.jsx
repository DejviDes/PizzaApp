import Navbar from "./components/Navbar";
import OldFooter from "./components/OldFooter.jsx";
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
            <OldFooter/>
        </div>
    );
}

export default Layout;