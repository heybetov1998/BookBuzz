import styles from "./ProductCard.module.scss";
import dots from "../../../assets/images/dots.svg";
import SquareImage from "../SquareImage/SquareImage";

const ProductCard = () => {
    return (
        <div className={styles.productCard}>
            <div className={styles.header}>
                <img src={dots} alt="three dot" />
            </div>
            <div className={styles.body}>
                <SquareImage />
            </div>
            <div className="footer"></div>
        </div>
    );
};

export default ProductCard;
