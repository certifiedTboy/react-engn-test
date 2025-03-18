import { useContext } from "react";
import { MessageOptionContext } from "../../../context/toggle-inbox-context";
import AppIcon from "../../common/AppIcon";
import { TiMessages } from "react-icons/ti";
import messageIcon from "../../../assets/images/message.png";
import userIcon from "../../../assets/images/user-tick.png";
import circleIcon from "../../../assets/images/tick-circle.svg";
import starIcon from "../../../assets/images/star.png";
import spamIcon from "../../../assets/images/info-circle.svg";
import addIcon from "../../../assets/images/add.svg";
import styles from "./DropDown.module.css";

const DropDownOption = () => {
  const { toggleShowAllInbox } = useContext(MessageOptionContext);

  return (
    <div className={`w-full  ${styles.dropdown_option_container}`}>
      <div
        className={`flex items-center justify-between text-[10px] lsm:text-[12px] lg:text-[14px] ${styles.active_option}`}
        onClick={toggleShowAllInbox}
      >
        <div className="flex items-center gap-3">
          <AppIcon value={{ color: "#000", size: "1.3em" }}>
            <TiMessages />
          </AppIcon>

          <h1 className="font-bold">All</h1>
        </div>

        <h1 className=""> 345</h1>
      </div>

      <div
        className={`flex items-center justify-between text-[10px] lsm:text-[12px] lg:text-[14px] ${styles.option}`}
      >
        <div className="flex items-center gap-3">
          {/* <AppIcon value={{ color: "#666666", size: "1.3em" }}>
            <TiMessages />
          </AppIcon> */}

          <img src={messageIcon} width="20px" />

          <h1 className="font-bold">New</h1>
        </div>

        <h1 className=""> 3</h1>
      </div>

      <div
        className={`flex items-center justify-between text-[10px] lsm:text-[12px] lg:text-[14px] ${styles.option}`}
      >
        <div className="flex items-center gap-3">
          {/* <AppIcon value={{ color: "#666666", size: "1.3em" }}>
            <TiMessages />
          </AppIcon> */}

          <img src={userIcon} width="20px" />

          <h1 className="font-bold">Assigned to me</h1>
        </div>

        {/* <h1 className=""> 345</h1> */}
      </div>

      <div
        className={`flex items-center justify-between text-[10px] lsm:text-[12px] lg:text-[14px] ${styles.option}`}
      >
        <div className="flex items-center gap-3">
          {/* <AppIcon value={{ color: "#666666", size: "1.3em" }}>
            <TiMessages />
          </AppIcon> */}

          <img src={circleIcon} width="20px" />

          <h1 className=" font-bold">Closed</h1>
        </div>

        {/* <h1 className=""> 345</h1> */}
      </div>

      <div
        className={`flex items-center justify-between text-[10px] lsm:text-[12px] lg:text-[14px] ${styles.option}`}
      >
        <div className="flex items-center gap-3">
          {/* <AppIcon value={{ color: "#666666", size: "1.3em" }}>
            <TiMessages />
          </AppIcon> */}

          <img src={starIcon} width="20px" />

          <h1 className=" font-bold">Starred</h1>
        </div>

        {/* <h1 className=""> 345</h1> */}
      </div>

      <div
        className={`flex items-center justify-between text-[10px] lsm:text-[12px] lg:text-[14px] ${styles.option}`}
      >
        <div className="flex items-center gap-3">
          {/* <AppIcon value={{ color: "#666666", size: "1.3em" }}>
            <TiMessages />
          </AppIcon> */}
          <img src={spamIcon} width="20px" />
          <h1 className=" font-bold">Spam</h1>
        </div>

        <h1 className="">1</h1>
      </div>

      <div
        className={`flex items-center justify-between text-[10px] lsm:text-[12px] lg:text-[14px] ${styles.option}`}
      >
        <div className="flex items-center gap-3">
          {/* <AppIcon value={{ color: "#666666", size: "1.3em" }}>
            <TiMessages />
          </AppIcon> */}

          <img src={addIcon} width="10px" />

          <h1 className="font-bold text-[10px] md:text-[13px]">Add Block</h1>
        </div>

        {/* <h1 className="">1</h1> */}
      </div>
    </div>
  );
};

export default DropDownOption;
