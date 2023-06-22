import styles from "./Header.module.scss";
import SearchInput from "../../ui/SearchInput/SearchInput";
import Nav from "../../ui/Nav/Nav";

const Header = () => {
    return (
        <header className={styles.headerComponent}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <SearchInput />
                    </div>
                    <div className="col-md-6">
                        <Nav />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
