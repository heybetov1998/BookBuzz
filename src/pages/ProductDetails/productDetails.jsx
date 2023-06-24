import Info from "../../components/ui/Info/Info";
import Tag from "../../components/ui/Tag/Tag";
import styles from "./productDetails.module.scss";
// import { useParams } from "react-router-dom";

const ProductDetails = () => {
    // const { id } = useParams();

    return (
        <section className={styles.productDetailsPage}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="gallery">
                            <div className="main"></div>
                            <div className="others"></div>
                        </div>
                    </div>
                    <div className="col-md-6">
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
