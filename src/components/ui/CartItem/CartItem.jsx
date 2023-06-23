import styles from "./CartItem.module.scss";
import dog from "../../../assets/images/dog_pp.jpg";
import QuantityChanger from "../QuantityChanger/QuantityChanger";
import Button from "../Button/Button";
import { FaMinus } from "react-icons/fa6";

const CartItem = () => {
    return (
        <div className={styles.cartItem}>
            <div className="row">
                <div className="col-md-6">
                    <div className={styles.info}>
                        <h3 className={styles.title}>Book Title</h3>
                        <p className={styles.summary}>Book Summary</p>
                        <span className={styles.price}>$10.00</span>
                        <Button className={styles.deleteButton}>
                            <FaMinus />
                        </Button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={styles.image}>
                        <img src={dog} alt="dog pp" />
                        <QuantityChanger className={styles.absolute} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
