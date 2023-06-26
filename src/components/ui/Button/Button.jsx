import styles from "./Button.module.scss";

const Button = ({ children, className, onclick = () => {} }) => {
    return (
        <button
            onClick={onclick}
            className={`${styles.buttonComponent} ${className ?? ""}`}
        >
            {children}
        </button>
    );
};

export default Button;
