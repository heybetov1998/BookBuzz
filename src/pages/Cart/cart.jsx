import CartItem from "../../components/ui/CartItem/CartItem";
import CheckoutCard from "../../components/ui/CheckoutCard/CheckoutCard";
// import useFetch from "../../hooks/useFetch";
import styles from "./cart.module.scss";

const Cart = () => {
    // const { data, loading, error } = useFetch(
    //     "http://bookbuzz.cronhex.com/api/v1/account/login",
    //     {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.parse('{"email": "bob@bob.xyz","password": "n0rM@N!"}'),
    //     }
    // );

    // if (error)
    //     return (
    //         <h1 className="my-5 text-danger text-center">
    //             Something went wrong
    //         </h1>
    //     );

    // if (loading) return <h1 className="my-5 text-center">Loading...</h1>;

    // if (data)
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
                    <div className="col-md-4">
                        <div className="d-flex align-items-end h-100">
                            <CheckoutCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
