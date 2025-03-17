import logo from "../../assets/images/logo.png";
import AppIcon from "../common/AppIcon";
import { RiSettings3Line } from "react-icons/ri";
import { GoHorizontalRule } from "react-icons/go";
import { IoMdPower } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import styles from "./layout.module.css";

const SideBar = () => {
  return (
    <nav
      className={`${styles.side_bar} fixed top-0 left-0 bottom-0 w-[7%] flex flex-col gap-10 items-center  bg-[#fff]  `}
    >
      <div style={{ marginTop: "1.5rem" }}>
        <img src={logo} alt="app_logo_image" className="w-[33px] h-[36px]" />
      </div>

      <div>
        <AppIcon value={{ color: "#828282", size: "3em" }}>
          <GoHorizontalRule />
        </AppIcon>
      </div>
      <div
        className="flex flex-col gap-10 w-full items-center justify-between h-screen overflow-auto"
        style={{ paddingBottom: "20px" }}
      >
        <div className="flex flex-col gap-5 items-center">
          <AppIcon value={{ color: "#515050", size: "1.3em" }}>
            <RiSettings3Line />
          </AppIcon>
          <AppIcon value={{ color: "#515050", size: "1.3em" }}>
            <RiSettings3Line />
          </AppIcon>
          <AppIcon value={{ color: "#515050", size: "1.3em" }}>
            <RiSettings3Line />
          </AppIcon>
          <AppIcon value={{ color: "#515050", size: "1.3em" }}>
            <RiSettings3Line />
          </AppIcon>
          <AppIcon value={{ color: "#515050", size: "1.3em" }}>
            <RiSettings3Line />
          </AppIcon>
          <AppIcon value={{ color: "#515050", size: "1.3em" }}>
            <RiSettings3Line />
          </AppIcon>
          <AppIcon value={{ color: "#515050", size: "1.3em" }}>
            <RiSettings3Line />
          </AppIcon>
          <AppIcon value={{ color: "#515050", size: "1.3em" }}>
            <RiSettings3Line />
          </AppIcon>
        </div>

        <div className="flex flex-col gap-5" style={{ marginTop: "auto" }}>
          <AppIcon value={{ color: "#515050", size: "1.3em" }}>
            <IoMdPower />
          </AppIcon>
          <AppIcon value={{ color: "#515050", size: "1.3em" }}>
            <TbLogout2 />
          </AppIcon>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
