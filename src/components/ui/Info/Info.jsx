import styles from "./Info.module.scss";
import dog from "../../../assets/images/dog_pp.jpg";

const Info = () => {
    return (
        <div className={styles.infoComponent}>
            <img src={dog} alt="dog" />
            <span className={styles.text}>Seller Name</span>
        </div>
    );
};

export default Info;
