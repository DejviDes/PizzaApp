import styles from "../styles/Dishes.module.scss";
import DishesCard from "./DishesCard";
import DishesMain from "./DishesMain";

function Dishes() {
    return (
        <div className={styles.DishesContainer}>
            <div className={styles.DishesTopContainer}>
                <h1 className={styles.DishesHeading}>Our Special Dishes</h1>
                <p className={styles.DishesDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </p>
            </div>
            <DishesCard/>
            <DishesMain/>
        </div>
    );
}

export default Dishes;

