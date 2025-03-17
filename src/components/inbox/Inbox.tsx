import InboxMenu from "./InboxMenu";
import MessageList from "./messages/MessageList";
import styles from "./inbox.module.css";

const Inbox = () => {
  return (
    <section className={styles.inbox_container}>
      <InboxMenu />
      <MessageList />
    </section>
  );
};

export default Inbox;
