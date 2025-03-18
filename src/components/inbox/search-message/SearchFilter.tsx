import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import AppIcon from "../../common/AppIcon";
import styles from "./SearchMessageInput.module.css";

const SearchFilter: React.FC<{ field: string }> = ({ field }) => {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleShowMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setShowMenu(!showMenu);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,

      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,

      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <motion.div className={styles.menu_item}>
      <div
        className={`cursor-pointer ${styles.filter_select}`}
        onClick={toggleShowMenu}
      >
        {field}

        <AppIcon value={{ color: "#333", size: "1.5em" }}>
          <IoIosArrowDown />
        </AppIcon>
      </div>
      <motion.div
        className={styles.sub_menu}
        initial="exit"
        animate={showMenu ? "enter" : "exit"}
        variants={subMenuAnimate}
        onClick={toggleShowMenu}
      >
        {field}
      </motion.div>
    </motion.div>
  );
};

export default SearchFilter;
