import styles from "./CheckoutCard.module.scss";

const CheckoutCard = () => {
    return (
        <div className={styles.checkoutCart}>
            <div className={styles.header}>
                <h3 className={styles.title}>Shopping Cart</h3>
            </div>
            <div className={styles.body}>
                <div className={styles.box}>
                    
                </div>
            </div>
            <div className={styles.footer}></div>
        </div>
    );
};

export default CheckoutCard;
