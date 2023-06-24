import { FaMagnifyingGlass } from "react-icons/fa6";
import InputGroup from "../InputGroup/InputGroup";

const SearchInput = () => {
    return (
        <form className="w-100">
            <InputGroup
                placeholder="Search for books by title, author, or ISBN"
                icon={<FaMagnifyingGlass />}
            />
        </form>
    );
};

export default SearchInput;
