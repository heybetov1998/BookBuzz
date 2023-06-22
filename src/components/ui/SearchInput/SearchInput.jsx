import styles from "./SearchInput.module.scss";
import searchIcon from "../../../assets/images/search_icon.svg";

const SearchInput = () => {
    return (
        <>
            <div className={`input-group ${styles.searchInput}`}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for books by title, author, or ISBN"
                />
                <div className={`input-group-append ${styles.inputIcon}`}>
                    <span className="input-group-text">
                        <img src={searchIcon} alt="search icon" />
                    </span>
                </div>
            </div>
        </>
    );
};

export default SearchInput;
