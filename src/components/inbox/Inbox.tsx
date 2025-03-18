import { useContext } from "react";
import InboxMenu from "./InboxMenu";
import MessageList from "./messages/MessageList";
import { MessageOptionContext } from "../../context/toggle-inbox-context";
import InboxMessage from "./messages/InboxMessage";
// import MessageDrawer from "./drawer/MessageDrawer";
import styles from "./inbox.module.css";

// const data = [
//   { name: "1", url: "/private/loans" },
//   { name: "2", url: "/private/cards" },
//   { name: "3", url: "/private/deposits" },
//   { name: "4", url: "/private/services" },
//   { name: "5", url: "/private/services" },
//   { name: "6", url: "/private/services" },
//   { name: "7", url: "/private/services" },
// ];

const Inbox = () => {
  const { optionIsOpen, showAllInbox } = useContext(MessageOptionContext);

  return (
    <>
      <section className={`${styles.inbox_container} fixed top-0 left-0`}>
        <InboxMenu />
        {optionIsOpen && showAllInbox && <MessageList />}
        <InboxMessage />
      </section>

      {/* <MessageDrawer overlayColor="#303030" data={data} width={300} /> */}
    </>
  );
};

export default Inbox;
