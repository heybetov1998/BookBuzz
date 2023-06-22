import CustomLink from "../CustomLink/CustomLink";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import styles from "./Nav.module.scss";

const Nav = () => {
    return (
        <nav className={styles.navComponent}>
            <ul className={styles.navigation}>
                <li>
                    <CustomLink isLight to="/products">
                        Products
                    </CustomLink>
                </li>
                <li>
                    <CustomLink isLight to="/cart">
                        Cart
                    </CustomLink>
                </li>
                <li>
                    <CustomLink to="/login">Login</CustomLink>
                </li>
                <li>
                    <ProfilePicture />
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
