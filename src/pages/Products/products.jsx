import { Link } from "react-router-dom";
import Button from "../../components/ui/Button/Button";
import ProductCard from "../../components/ui/ProductCard/ProductCard";
import styles from "./products.module.scss";
import useFetch from "../../hooks/useFetch";

const Products = () => {
    const { data, error, loading } = useFetch(
        "http://bookbuzz.cronhex.com/api/v1/product/explore"
    );

    if (error) return <div>{error}</div>;

    if (loading) return <div>loading...</div>;

    if (data)
        return (
            <section className={styles.productsPage}>
                <div className="container">
                    <h2 className={styles.sectionName}>Browse All Books</h2>
                    <div className="row">
                        <div className="col-md-3 mb-4">
                            <Link className={styles.cardLink} to={"1"}>
                                <ProductCard />
                            </Link>
                        </div>
                    </div>
                    <div className="text-center">
                        <Button>Load more</Button>
                    </div>
                </div>
            </section>
        );
};

export default Products;
