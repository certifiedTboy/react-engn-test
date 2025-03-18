import { useContext } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { MessageOptionContext } from "../../context/toggle-inbox-context";
import AppIcon from "../common/AppIcon";
import styles from "./inbox.module.css";

const ToggleInboxMenu = () => {
  const { toggleMessageOption } = useContext(MessageOptionContext);
  return (
    <div className={`${styles.toggle_btn}`} onClick={toggleMessageOption}>
      <AppIcon value={{ color: "#000", size: "1em" }}>
        <FaAngleLeft />
      </AppIcon>
    </div>
  );
};

export default ToggleInboxMenu;
