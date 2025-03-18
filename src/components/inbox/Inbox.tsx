import { useContext } from "react";
import InboxMenu from "./InboxMenu";
import MessageList from "./messages/MessageList";
import ToggleInboxMenu from "./ToggleInboxMenu";
import { MessageOptionContext } from "../../context/toggle-inbox-context";
import styles from "./inbox.module.css";

const Inbox = () => {
  const { optionIsOpen } = useContext(MessageOptionContext);

  return (
    <section
      className={`${styles.inbox_container} fixed top-0 left-30 bottom-0 `}
    >
      {optionIsOpen && <InboxMenu />}
      {optionIsOpen && <ToggleInboxMenu />}
      {optionIsOpen && <MessageList />}
    </section>
  );
};

export default Inbox;
