import InboxMenu from "./InboxMenu";
import MessageList from "./messages/MessageList";
import styles from "./inbox.module.css";

const Inbox = () => {
  return (
    <section
      className={`${styles.inbox_container} fixed top-0 left-30 bottom-0 `}
    >
      <InboxMenu />
      <MessageList />
    </section>
  );
};

export default Inbox;
