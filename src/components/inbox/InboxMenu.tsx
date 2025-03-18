import ComposeBtn from "./ComposeBtn";
import InboxMenuDropDown from "./dropwdown/InboMenuDropDown";
import styles from "./inbox.module.css";
const InboxMenu = () => {
  return (
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
  );
};

export default InboxMenu;
