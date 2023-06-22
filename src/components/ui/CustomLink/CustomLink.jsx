import { Link } from "react-router-dom";
import styles from "./CustomLink.module.scss";

const CustomLink = ({ to, children, isLight = false }) => {
    return (
        <Link
            to={to}
            className={`${[
                isLight ? styles.lightLink : "",
                styles.customLink,
            ].join(" ")}`}
        >
            {children}
        </Link>
    );
};

export default CustomLink;
