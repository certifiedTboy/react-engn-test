import InboxMenu from "./InboxMenu";
import styles from "./inbox.module.css";

const Inbox = () => {
  return (
    <section className={styles.inbox_container}>
      <InboxMenu />
    </section>
  );
};

export default Inbox;
