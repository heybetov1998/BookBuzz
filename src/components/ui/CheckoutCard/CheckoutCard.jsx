import CheckoutItem from "../CheckoutItem/CheckoutItem";
import styles from "./CheckoutCard.module.scss";

const CheckoutCard = () => {
    return (
        <div className={styles.checkoutCart}>
            <div className={styles.header}>
                <h3 className={styles.title}>Shopping Cart</h3>
            </div>
            <div className={styles.body}>
                <div className={styles.box}>
                    <CheckoutItem
                        boldTitle
                        hasQuantity
                        title="Book title"
                        price={10}
                    />
                    <CheckoutItem
                        boldTitle
                        hasQuantity
                        title="Book title"
                        price={10}
                    />
                </div>
                <div className={styles.box}>
                    <CheckoutItem title="Subtotal" price={22} />
                    <CheckoutItem title="Shipping" price={3.26} />
                    <CheckoutItem
                        boldTitle
                        boldPrice
                        title="Total"
                        price={25.26}
                    />
                </div>
            </div>
            <div className={styles.footer}></div>
        </div>
    );
};

export default CheckoutCard;
