import { useContext } from "react";
import InboxMenu from "./InboxMenu";
import MessageList from "./messages/MessageList";
import { MessageOptionContext } from "../../context/toggle-inbox-context";
import { SidebarContext } from "../../context/toggle-sidebar-context";
import InboxMessage from "./messages/InboxMessage";
import MessageDrawer from "./drawer/MessageDrawer";
import styles from "./inbox.module.css";

const Inbox = () => {
  const { optionIsOpen, showAllInbox } = useContext(MessageOptionContext);
  const { hideSideNav } = useContext(SidebarContext);

  return (
    <>
      <section
        className={`${
          hideSideNav ? styles.inbox_container2 : styles.inbox_container
        } fixed top-0 left-0`}
      >
        <InboxMenu />
        {optionIsOpen && showAllInbox && <MessageList />}
        <InboxMessage />
      </section>

      <MessageDrawer width={300} />
    </>
  );
};

export default Inbox;
