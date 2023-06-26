import styles from "./Header.module.scss";
import SearchInput from "../../ui/SearchInput/SearchInput";
import Nav from "../../ui/Nav/Nav";

const Header = () => {
    return (
        <header className={styles.headerComponent}>
            <div className="container">
                <div className="d-flex align-items-center">
                    <h1>BookBuzz</h1>
                    <SearchInput id="search" />
                    <Nav />
                </div>
            </div>
        </header>
    );
};

export default Header;
