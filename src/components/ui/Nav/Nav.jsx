import CustomLink from "../CustomLink/CustomLink";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import styles from "./Nav.module.scss";

const Nav = () => {
    let login = (
        <li>
            <CustomLink to="/login">Login</CustomLink>
        </li>
    );

    if (localStorage.getItem("token") !== null) {
        login = null;
    }

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
                {login}
                <li>
                    <ProfilePicture />
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
