import styles from "./SquareImage.module.scss";
import dog from "../../../assets/images/dog_pp.jpg";

const SquareImage = () => {
    return (
        <div className={styles.squareImage}>
            <img src={dog} alt="dog" />
        </div>
    );
};

export default SquareImage;
