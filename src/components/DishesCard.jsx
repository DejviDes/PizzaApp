import styles from "../styles/DishesCard.module.scss";
import Pizza1 from "../assets/img/pizza1.png";
import Pizza2 from "../assets/img/pizza2.png";
import Pizza3 from "../assets/img/pizza3.png";
import Pizza4 from "../assets/img/pizza4.png";

function DishesCard() {
    return (
        <div className={styles.DishesCardContainer}>
            <div className={styles.DishesSubContainer}>
                <div className={styles.DishesSubCard}>
                    <div className={styles.DishesImgContainer}>
                        <div className={styles.DishesImgSubContainer}>
                            <img className={styles.DishesMainImg} src={Pizza1} alt="Lumpia with Sauce"/>
                            <div className={styles.DishesPrice}>$12</div>
                        </div>
                    </div>
                    <h3 className={styles.DishesCardHeading}>Lumpia with Sauce</h3>
                    <p className={styles.DishesCardDescription}>
                        Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                </div>

                <div className={styles.DishesSubCard}>
                    <div className={styles.DishesImgContainer}>
                        <div className={styles.DishesImgSubContainer}>
                            <img className={styles.DishesMainImg} src={Pizza2} alt="Chicken with Sauce"/>
                            <div className={styles.DishesPrice}>$15</div>
                        </div>
                    </div>
                    <h3 className={styles.DishesCardHeading}>Chicken with Sauce</h3>
                    <p className={styles.DishesCardDescription}>
                        Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                </div>

                <div className={styles.DishesSubCard}>
                    <div className={styles.DishesImgContainer}>
                        <div className={styles.DishesImgSubContainer}>
                            <img className={styles.DishesMainImg} src={Pizza3} alt="Beef with Sauce"/>
                            <div className={styles.DishesPrice}>$20</div>
                        </div>
                    </div>
                    <h3 className={styles.DishesCardHeading}>Beef with Sauce</h3>
                    <p className={styles.DishesCardDescription}>
                        Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                </div>

                <div className={styles.DishesSubCard}>
                    <div className={styles.DishesImgContainer}>
                        <div className={styles.DishesImgSubContainer}>
                            <img className={styles.DishesMainImg} src={Pizza4} alt="Shrimp with Sauce"/>
                            <div className={styles.DishesPrice}>$25</div>
                        </div>
                    </div>
                    <h3 className={styles.DishesCardHeading}>Shrimp with Sauce</h3>
                    <p className={styles.DishesCardDescription}>
                        Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DishesCard;
