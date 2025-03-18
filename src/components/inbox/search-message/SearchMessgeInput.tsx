import { useState } from "react";
import AppIcon from "../../common/AppIcon";
import { CiSearch } from "react-icons/ci";
import { IoFilterSharp } from "react-icons/io5";
import SearchFilter from "./SearchFilter";
import styles from "../messages/Messges.module.css";

const SearchMessageInput = () => {
  const [showFilter, setShowFilter] = useState<boolean>(false);

  return (
    <div>
      <div className="flex items-center">
        <div className={styles.search_icon}>
          <AppIcon value={{ color: "#333", size: "1.5em" }}>
            <CiSearch />
          </AppIcon>
        </div>
        <input
          type="text"
          placeholder="Search"
          className={`p-2 ${styles.search_input}`}
        />

        <div
          className={styles.filter_icon}
          onClick={() => setShowFilter(!showFilter)}
        >
          <AppIcon value={{ color: "#333", size: "1.5em" }}>
            <IoFilterSharp />
          </AppIcon>
        </div>
      </div>

      {showFilter && (
        <div className="flex items-center gap-5" style={{ marginTop: "20px" }}>
          <SearchFilter field="Channel" /> <SearchFilter field="Assigned to" />
        </div>
      )}
    </div>
  );
};

export default SearchMessageInput;
