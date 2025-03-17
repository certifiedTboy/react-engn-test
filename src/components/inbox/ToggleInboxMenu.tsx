import { FaAngleLeft } from "react-icons/fa6";
import AppIcon from "../common/AppIcon";
import style from "./inbox.module.css";

const ToggleInboxMenu = () => {
  return (
    <button className="absolute ">
      <AppIcon value={{ color: "#000", size: "1.3em" }}>
        <FaAngleLeft />
      </AppIcon>
    </button>
  );
};

export default ToggleInboxMenu;
