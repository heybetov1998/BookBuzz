import CartItem from "../../components/ui/CartItem/CartItem";
import styles from "./cart.module.scss";

const Cart = () => {
    return (
        <section className={styles.cartPage}>
            <div className="container">
                <h2 className={styles.sectionName}>Cart</h2>

                <div className="row">
                    <div className="col-md-8">
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
