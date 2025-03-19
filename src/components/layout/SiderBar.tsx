import logo from "../../assets/images/logo.png";
import gridIcon from "../../assets/images/grid.svg";
// import inboxIcon from "../../assets/images/direct-inbox.png";
import documentIcon from "../../assets/images/document.svg";
import volumeIcon from "../../assets/images/volume-high.svg";
import profileIcon from "../../assets/images/profile.svg";
import documentCopyIcon from "../../assets/images/document-copy.svg";
import documentTextIcon from "../../assets/images/document-text.svg";
import signoutIcon from "../../assets/images/signout.png";
import AppIcon from "../common/AppIcon";
import { RiSettings3Line } from "react-icons/ri";
import { GoHorizontalRule } from "react-icons/go";
import { HiMiniInboxArrowDown } from "react-icons/hi2";
import { IoMdPower } from "react-icons/io";

// import { TbLogout2 } from "react-icons/tb";
import styles from "./layout.module.css";

const SideBar = () => {
  return (
    <aside
      className={`${styles.side_bar} fixed top-0 left-0 bottom-0 w-[70px] z-10 flex flex-col gap-10 items-center  bg-[#fff]  `}
    >
      <div
        className="flex items-center justify-between"
        style={{ marginTop: "1.5rem" }}
      >
        <div style={{ paddingRight: "15px", marginLeft: "10px" }}>
          <img src={logo} alt="app_logo_image" className="w-[33px] h-[36px]" />
        </div>

        <div className={styles.toggle_sidebar}></div>
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
          <div className={`${styles.icon} cursor-pointer`}>
            <img src={gridIcon} alt="grid_icon" className="w-[20px]" />
          </div>

          {/* <div className="cursor-pointer">
            <img src={inboxIcon} alt="inbox_icon" className="w-[20px]" />
          </div> */}
          <div className={`cursor-pointer ${styles.active}`}>
            <AppIcon value={{ color: "#004FFF", size: "1.3em" }}>
              <HiMiniInboxArrowDown />
            </AppIcon>
          </div>
          <div className={`${styles.icon} cursor-pointer`}>
            <img src={volumeIcon} alt="volume_icon" className="w-[20px] " />
          </div>

          <div className={`${styles.icon} cursor-pointer`}>
            <img src={documentIcon} alt="document_icon" className="w-[20px] " />
          </div>

          <div className={`${styles.icon} cursor-pointer`}>
            <img src={profileIcon} alt="profile_icon" className="w-[20px] " />
          </div>

          <div className={`${styles.icon} cursor-pointer`}>
            <img src={documentCopyIcon} alt="copy_icon" className="w-[20px] " />
          </div>

          <div className={`${styles.icon} cursor-pointer`}>
            <img src={documentTextIcon} alt="text_icon" className="w-[20px] " />
          </div>

          <div className={`${styles.icon} cursor-pointer`}>
            <AppIcon value={{ color: "#515050", size: "1.2em" }}>
              <RiSettings3Line />
            </AppIcon>
          </div>
        </div>

        <div className="flex flex-col gap-5" style={{ marginTop: "auto" }}>
          <div className={`${styles.icon} cursor-pointer`}>
            <AppIcon value={{ color: "#515050", size: "1.2em" }}>
              <IoMdPower />
            </AppIcon>
          </div>

          <div className="cursor-pointer">
            <img src={signoutIcon} alt="grid" className="w-[20px] " />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
