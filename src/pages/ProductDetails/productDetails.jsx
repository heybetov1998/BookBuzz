import Info from "../../components/ui/Info/Info";
import Tag from "../../components/ui/Tag/Tag";
import QuantityChanger from "../../components/ui/QuantityChanger/QuantityChanger";
import Button from "../../components/ui/Button/Button";
import styles from "./productDetails.module.scss";
// import { useParams } from "react-router-dom";
import dog from "../../assets/images/dog_pp.jpg";
import SquareImage from "../../components/ui/SquareImage/SquareImage";

const ProductDetails = () => {
    // const { id } = useParams();

    return (
        <section className={styles.productDetailsPage}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className={styles.gallery}>
                            <div className={styles.main}>
                                <SquareImage />
                            </div>
                            <div className={styles.others}>
                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <SquareImage />
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <SquareImage />
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <SquareImage />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-6 ${styles.product}`}>
                        <h2 className={styles.sectionName}>Product Name</h2>
                        <p className="overview">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Quaerat necessitatibus cum in excepturi modi
                            error iusto dolores aperiam, sapiente praesentium,
                            ullam fugit neque? Libero ullam maiores adipisci
                            eligendi quo corporis eum, natus, facere omnis,
                            porro voluptates. Facere facilis ut quasi incidunt
                            nam omnis earum soluta aliquam quo? Corporis, iure
                            culpa!
                        </p>
                        <div className="tags">
                            <Tag />
                            <Tag />
                            <Tag />
                        </div>
                        <div className={`d-flex ${styles.info}`}>
                            <Info />
                            <Info />
                        </div>
                        <div className={styles.quantityPrice}>
                            <div className={styles.quantity}>
                                <QuantityChanger />
                                <p className={styles.inStock}>In Stock: 5</p>
                            </div>
                            <p className={styles.price}>
                                Price: <span>$14.00</span>
                            </p>
                        </div>
                        <Button className="mt-4">Add to cart</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
