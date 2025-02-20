import styles from "../styles/Reviews.module.scss";
import ReviewsCards from "./ReviewsCards";
import NewLetterImg from "../assets/img/newsletter.png";

function Reviews() {
    return (
        <div className={styles.container}>
            <div className={styles.headerSection}>
                <h1 className={styles.heading}>Our Happy Customers</h1>
                <p className={styles.subheading}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </p>
            </div>
            <ReviewsCards/>
            <div className={styles.newsletterSection}>
                <div className={styles.newsletterContent}>
                    <img className={styles.newsletterImage} src={NewLetterImg} alt=""/>
                    <h1 className={styles.promoText}>Get Or Promo Code by Subscribing To our Newsletter</h1>
                    <div className={styles.inputWrapper}>
                        <div className={styles.inputContainer}>
                            <input className={styles.emailInput} type="text" placeholder="Enter Your Email"/>
                            <button className={styles.subscribeButton}>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;