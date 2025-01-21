import { useContext, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { DictContext } from "../store/DictContext";
function SearchBox() {
  const find = useRef();
  const { onSearch } = useContext(DictContext);
  const handleClick = () => {
    onSearch(find.current.value);
  };
  const handleKey = (eve) => {
    if (eve.key == "Enter") {
      onSearch(find.current.value);
    }
  };
  return (
    <>
      <div className="search-bar input-group mx-auto mt-3">
        <input
          type="text"
          className="input-box form-control"
          ref={find}
          onKeyDown={handleKey}
        />
        <button
          className="search-icon input-group-text btn btn-success"
          onClick={handleClick}
        >
          <FaSearch />
        </button>
      </div>
    </>
  );
}
export default SearchBox;
