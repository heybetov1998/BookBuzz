import styles from "./ProductCard.module.scss";
import dots from "../../../assets/images/dots.svg";
import SquareImage from "../SquareImage/SquareImage";
import { FaHeart } from "react-icons/fa6";

const ProductCard = () => {
    return (
        <div className={styles.productCard}>
            <div className={styles.header}>
                <img src={dots} alt="three dot" />
            </div>
            <div className={styles.body}>
                <SquareImage className={styles.image} />
                <h3 className={styles.title}>The Da Vinci Code</h3>
                <p className={styles.description}>
                    A thriller novel by Dan Brown
                </p>
            </div>
            <div className={styles.footer}>
                <div className={styles.like}>
                    <div className="d-flex align-items-center">
                        <FaHeart className={styles.heart} />
                        <span>12</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
