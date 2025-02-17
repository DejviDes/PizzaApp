import styles from "../styles/DishesCard.module.scss";
import Pizza1 from "../assets/img/pizza1.png";
import Pizza2 from "../assets/img/pizza2.png";
import Pizza3 from "../assets/img/pizza3.png";
import Pizza4 from "../assets/img/pizza4.png";

function DishesCard() {
    const dishes = [
        {img: Pizza1, price: "$12", title: "Lumpia with Sauce"},
        {img: Pizza2, price: "$15", title: "Chicken with Sauce"},
        {img: Pizza3, price: "$20", title: "Beef with Sauce"},
        {img: Pizza4, price: "$25", title: "Shrimp with Sauce"},
    ];

    return (
        <div className={styles.DishesCardContainer}>
            {dishes.map((dish, index) => (
                <div key={index} className={styles.DishesCardSubContainer}>
                    <div className={styles.DishesSubCard}>
                        <div className={styles.DishesImgContainer}>
                            <div className={styles.DishesImgSubContainer}>
                                <img className={styles.DishesMainImg} src={dish.img} alt=""/>
                                <div className={styles.DishesPrice}>{dish.price}</div>
                            </div>
                        </div>
                        <h3 className={styles.DishesCardHeading}>{dish.title}</h3>
                        <p className={styles.DishesCardDescription}>
                            Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DishesCard;