import ComposeBtn from "./ComposeBtn";
import styles from "./inbox.module.css";
const InboxMenu = () => {
  return (
    <div className={`${styles.inbox_menu} flex flex-col gap-4 items-center`}>
      <ComposeBtn />
    </div>
  );
};

export default InboxMenu;
