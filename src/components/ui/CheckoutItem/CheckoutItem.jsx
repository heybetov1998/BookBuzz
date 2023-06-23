import styles from "./CheckoutItem.module.scss";

const CheckoutItem = () => {
    return (
        <div className={styles.checkoutItem}>
            <div className={styles.top}>
                <div className={styles.title}></div>
                <div className={styles.price}></div>
            </div>
            <p className={styles.quantity}></p>
        </div>
    );
};

export default CheckoutItem;
