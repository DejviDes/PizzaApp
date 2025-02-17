import styles from "./DishesMain.module.scss";
import DishesMainImg from "../assets/img/dishesMainImg.png";

function DishesMain() {
    return (
        <div className={styles.Container}>
            <div className={styles.GridWrapper}>
                <div className={styles.ImageWrapper}>
                    <img src={DishesMainImg} alt=""/>
                </div>
                <div className={styles.ContentWrapper}>
                    <div>
                        <h1 className={styles.Heading}>Welcome to Our Restaurant</h1>
                        <p className={styles.Paragraph}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className={styles.ButtonWrapper}>
                            <a href="" className={styles.ButtonBlack}>Menu</a>
                            <a href="" className={styles.ButtonOrange}>Book a table</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DishesMain;