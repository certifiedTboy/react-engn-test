import { useContext } from "react";
import InboxMenu from "./InboxMenu";
import MessageList from "./messages/MessageList";
import { MessageOptionContext } from "../../context/toggle-inbox-context";
import styles from "./inbox.module.css";

const Inbox = () => {
  const { optionIsOpen, showAllInbox } = useContext(MessageOptionContext);

  return (
    <section
      className={`${styles.inbox_container} fixed top-0 left-30 bottom-0 `}
    >
      <InboxMenu />
      {optionIsOpen && showAllInbox && <MessageList />}
    </section>
  );
};

export default Inbox;
