import MessageCard from "./MessageCard";
import SearchMessageInput from "./SearchMessgeInput";
import styles from "./Messges.module.css";
const MessageList = () => {
  return (
    <div className={`w-[25%] ${styles.message_list_container} relative`}>
      <div className="sticky top-25">
        <SearchMessageInput />
      </div>
      <div className={`overflow-x-scroll ${styles.message_list}`}>
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
      </div>
    </div>
  );
};

export default MessageList;
