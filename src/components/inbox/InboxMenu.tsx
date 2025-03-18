import { useContext } from "react";
import { MessageOptionContext } from "../../context/toggle-inbox-context";
import ComposeBtn from "./ComposeBtn";
import InboxMenuDropDown from "./dropwdown/InboMenuDropDown";
import ToggleInboxMenu from "./ToggleInboxMenu";
import styles from "./inbox.module.css";

const InboxMenu = () => {
  const { optionIsOpen } = useContext(MessageOptionContext);

  return (
    <>
      {optionIsOpen && (
        <div className={`${styles.inbox_menu} flex flex-col gap-4 relative`}>
          <div className="sticky top-25 ">
            <ComposeBtn />
          </div>

          <div
            className={`flex flex-col items-start gap-5 ${styles.inbox_menu_container} overflow-x-scroll`}
          >
            <InboxMenuDropDown name="Primary" />
            <InboxMenuDropDown name="Channels" />
            <InboxMenuDropDown name="Direct Messages" />
            <InboxMenuDropDown name="Group Messages" />
            <InboxMenuDropDown name="Labels" />
          </div>
        </div>
      )}

      <ToggleInboxMenu />
    </>
  );
};

export default InboxMenu;
