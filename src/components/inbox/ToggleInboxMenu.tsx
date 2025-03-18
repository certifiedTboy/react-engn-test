import { useContext } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

import { MessageOptionContext } from "../../context/toggle-inbox-context";
import AppIcon from "../common/AppIcon";
import styles from "./inbox.module.css";

const ToggleInboxMenu = () => {
  const { toggleMessageOption, optionIsOpen } =
    useContext(MessageOptionContext);
  return (
    <div
      className={`${styles.toggle_btn} relative z-50`}
      onClick={toggleMessageOption}
      style={{ marginLeft: `${optionIsOpen ? "-25px" : "-12px"}` }}
    >
      <AppIcon value={{ color: "#000", size: "1em" }}>
        {optionIsOpen ? <FaAngleLeft /> : <FaAngleRight />}
      </AppIcon>
    </div>
  );
};

export default ToggleInboxMenu;
