import styles from "./ProfilePicture.module.scss";
import pp from "../../../assets/images/dog_pp.jpg";

const ProfilePicture = () => {
    return (
        <div className={styles.profilePicture}>
            <img src={pp} alt="profile" />
        </div>
    );
};

export default ProfilePicture;
