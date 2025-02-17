import styles from './ReviewCards.module.scss';
import {Star} from 'lucide-react';
import Person1Img from '../assets/img/person1.png';

function ReviewCards() {
    return (
        <div className={styles.reviewContainer}>
            <div className={styles.grid}>
                <div className={styles.reviewCard}>
                    <img className={styles.reviewImg} src={Person1Img} alt=""/>
                    <div className={styles.stars}>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                    </div>
                    <p className={styles.reviewText}>
                        Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque
                        penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac
                        eu aliquam quis. Ornare tincidunt tempus semper
                    </p>
                    <h4 className={styles.name}>Ama Ampomah</h4>
                    <p className={styles.role}>CEO & Founder Inc</p>
                </div>
                <div className={styles.reviewCard}>
                    <img className={styles.reviewImg} src={Person1Img} alt=""/>
                    <div className={styles.stars}>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                    </div>
                    <p className={styles.reviewText}>
                        Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque
                        penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac
                        eu aliquam quis. Ornare tincidunt tempus semper
                    </p>
                    <h4 className={styles.name}>Ama Ampomah</h4>
                    <p className={styles.role}>CEO & Founder Inc</p>
                </div>
                <div className={styles.reviewCard}>
                    <img className={styles.reviewImg} src={Person1Img} alt=""/>
                    <div className={styles.stars}>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                        <Star style={{width: '1.5rem', height: '1.5rem', color: '#fcba03', fill: '#fcba03'}}/>
                    </div>
                    <p className={styles.reviewText}>
                        Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque
                        penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac
                        eu aliquam quis. Ornare tincidunt tempus semper
                    </p>
                    <h4 className={styles.name}>Ama Ampomah</h4>
                    <p className={styles.role}>CEO & Founder Inc</p>
                </div>
            </div>
        </div>
    );
}

export default ReviewCards;