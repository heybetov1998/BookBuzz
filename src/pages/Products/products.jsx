import ProductCard from "../../components/ui/ProductCard/ProductCard";
import styles from "./products.module.scss";

const Products = () => {
    return (
        <section className={styles.productsPage}>
            <div className="container">
                <h2 className={styles.sectionName}>Browse All Books</h2>
                <div className="row">
                    <div className="col-md-3">
                        <ProductCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
