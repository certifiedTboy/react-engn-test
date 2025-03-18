// import { useContext } from "react";
import { FaAngleRight } from "react-icons/fa6";
// import { SidebarContext } from "../../context/toggle-sidebar-context";
import AppIcon from "../common/AppIcon";
import styles from "./layout.module.css";

const ToggleSideBar = () => {
  // const { toggleSidebar, barIsOpen } = useContext(SidebarContext);
  return (
    <div className={`${styles.toggle_btn} `}>
      <AppIcon value={{ color: "#000", size: "1em" }}>
        <FaAngleRight />
      </AppIcon>
    </div>
  );
};

export default ToggleSideBar;
