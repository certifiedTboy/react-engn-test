import { useContext } from "react";
import { MessageOptionContext } from "../../../context/toggle-inbox-context";
import chatIcon from "../../../assets/images/chat.svg";
import styles from "./Messges.module.css";

const InboxMessage = () => {
  const { showAllInbox, optionIsOpen } = useContext(MessageOptionContext);

  return (
    <div
      className={`bg-[#f5f5f5] flex ${optionIsOpen && "w-[75%]"} ${
        !optionIsOpen && "w-[100%]"
      } ${
        optionIsOpen && showAllInbox && "w-[50%]"
      } justify-center items-center ${styles.inbox_message}`}
    >
      <div className="flex flex-col items-center gap-5">
        <img src={chatIcon} alt="chat_icon" className="w-[100px]" />

        <h3 className="text-[15px] font-bold text-[#666666]">
          No Message Selected
        </h3>
        <p
          className="text-[12px] text-[#667085]"
          style={{ marginTop: "-10px" }}
        >
          Select a message to open conversation and get started
        </p>
      </div>
    </div>
  );
};

export default InboxMessage;
