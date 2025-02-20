import styles from "../styles/Chef.module.scss";
import ChefImg from "../assets/img/chef.png";

function Chef() {
    return (
        <div className={styles.container}>
            <div className={styles.gridWrapper}>
                <div className={styles.contentWrapper}>
                    <h1 className={styles.heading}>Our Expert Chef</h1>
                    <p className={styles.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                    <div className={styles.listWrapper}>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><span className={styles.checkmark}>✓</span>Lorem ipsum dolor
                                sit amet, consectetur
                            </li>
                            <li className={styles.listItem}><span className={styles.checkmark}>✓</span>Lorem ipsum dolor
                                sit amet, consectetur
                            </li>
                            <li className={styles.listItem}><span className={styles.checkmark}>✓</span>Lorem ipsum dolor
                                sit amet, consectetur
                            </li>
                        </ul>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><span className={styles.checkmark}>✓</span>Lorem ipsum dolor
                                sit amet, consectetur
                            </li>
                            <li className={styles.listItem}><span className={styles.checkmark}>✓</span>Lorem ipsum dolor
                                sit amet, consectetur
                            </li>
                            <li className={styles.listItem}><span className={styles.checkmark}>✓</span>Lorem ipsum dolor
                                sit amet, consectetur
                            </li>
                        </ul>
                    </div>
                    <div className={styles.buttonWrapper}>
                        <a href="" className={styles.buttonBlack}>Menu</a>
                        <a href="" className={styles.buttonOrange}>Book a table</a>
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    <img src={ChefImg} alt="Chef"/>
                </div>
            </div>
        </div>
    );
}

export default Chef;
