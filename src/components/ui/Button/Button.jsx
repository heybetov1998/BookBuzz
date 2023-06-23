import styles from "./Button.module.scss";

const Button = ({ children, className }) => {
    return (
        <button className={`${styles.buttonComponent} ${className}`}>
            {children}
        </button>
    );
};

export default Button;
