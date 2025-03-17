import AppIcon from "../common/AppIcon";
import { HiOutlinePlusCircle } from "react-icons/hi";
import styles from "./inbox.module.css";

const ComposeBtn = () => {
  return (
    <button
      type="button"
      className={`${styles.compose_btn} bg-[#004FFF] flex items-center justify-center gap-2 text-white w-[90%] rounded-md cursor-pointer hover:bg-[#0039E6]`}
    >
      <AppIcon value={{ color: "#fff", size: "1.3em" }}>
        <HiOutlinePlusCircle />
      </AppIcon>
      Compose
    </button>
  );
};

export default ComposeBtn;
