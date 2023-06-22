import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footerComponent}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>BookBuzz</h1>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-between">
                            <ul>
                                <li>
                                    <h3>Social</h3>
                                </li>
                                <li>
                                    <Link
                                        to="https://www.facebook.com/"
                                        target="_blank"
                                    >
                                        Facebook
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="https://www.instagram.com/"
                                        target="_blank"
                                    >
                                        Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="https://www.linkedin.com/"
                                        target="_blank"
                                    >
                                        LinkedIn
                                    </Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link to="/">Get help</Link>
                                </li>
                                <li>
                                    <Link to="/">Partner with us</Link>
                                </li>
                                <li>
                                    <Link to="/">Add your bookshop</Link>
                                </li>
                                <li>
                                    <Link to="/">Sign up to sell books</Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link to="/">Read our blog</Link>
                                </li>
                                <li>
                                    <Link to="/">Buy gift card</Link>
                                </li>
                                <li>
                                    <Link to="/">Bookshops nearby</Link>
                                </li>
                                <li>
                                    <Link to="/">Save on first order</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
