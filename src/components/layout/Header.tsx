import { useContext } from "react";
import { SidebarContext } from "../../context/toggle-sidebar-context";
import AppIcon from "../common/AppIcon";
import { IoNotificationsOutline } from "react-icons/io5";
import ToggleSideBar from "./ToggleSideBar";
import styles from "./layout.module.css";

const Header = () => {
  const { barIsOpen } = useContext(SidebarContext);

  return (
    <header
      className={`${styles.header} fixed top-0 left-0 right-0 ${
        barIsOpen ? "w-[93%]" : "w-[100%]"
      } z-10 flex justify-between items-center p-4 h-[80px] drop-shadow-sm`}
    >
      <div className="flex items-center gap-3">
        <ToggleSideBar />
        <h1 className={`${styles.header_title} text-2xl font-bold`}>
          Shared Inbox
        </h1>
      </div>
      <div className="flex items-center space-x-4 gap-14">
        <button
          type="button"
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white  cursor-pointer"
        >
          <AppIcon value={{ color: "#515050", size: "2em" }}>
            <IoNotificationsOutline />
          </AppIcon>
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500  rounded-full -top-[0.15rem] -end-[0.10rem]"></div>
        </button>

        <div>
          <h1 className="font-bold">Abubakar Ismail</h1>
          <p className="text-[12px] text-[#515050]">Administrator</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
