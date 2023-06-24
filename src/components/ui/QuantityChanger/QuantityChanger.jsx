import styles from "./QuantityChanger.module.scss";
import { FaPlus, FaMinus } from "react-icons/fa6";

const QuantityChanger = ({ className = "" }) => {
    return (
        <div className={`${styles.quantityChanger} ${className}`}>
            <span className={styles.button}>
                <FaMinus />
            </span>
            <span className={styles.quantity}>2</span>
            <span className={styles.button}>
                <FaPlus />
            </span>
        </div>
    );
};

export default QuantityChanger;
