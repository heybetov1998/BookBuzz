import { FaMagnifyingGlass } from "react-icons/fa6";
import InputGroup from "../InputGroup/InputGroup";

const SearchInput = ({ id = "defaultId" }) => {
    return (
        <form className="w-100">
            <InputGroup
                id={id}
                placeholder="Search for books by title, author, or ISBN"
                icon={<FaMagnifyingGlass />}
            />
        </form>
    );
};

export default SearchInput;
