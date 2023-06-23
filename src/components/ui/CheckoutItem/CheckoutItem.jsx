import styles from "./CheckoutItem.module.scss";

const CheckoutItem = ({
    boldTitle = false,
    boldPrice = false,
    hasQuantity = false,
    title = "Title",
    price = 0,
    quantity = 1,
}) => {
    return (
        <div className={styles.checkoutItem}>
            <div className={styles.top}>
                <h3 className={boldTitle ? styles.boldTitle : styles.title}>
                    {title}
                </h3>
                <span className={boldPrice ? styles.boldPrice : styles.price}>
                    ${price.toFixed(2)}
                </span>
            </div>
            {hasQuantity && (
                <p className={styles.quantity}>Quantity: {quantity}</p>
            )}
        </div>
    );
};

export default CheckoutItem;
