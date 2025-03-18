import MessageCard from "./MessageCard";
import SearchMessageInput from "./SearchMessgeInput";
import { generateList } from "../../../helpers/generateList";
import styles from "./Messges.module.css";
const MessageList = () => {
  return (
    <div
      className={`${styles.message_list_container} hidden sm:block relative`}
    >
      <div className="sticky top-25">
        <SearchMessageInput />
      </div>
      <div className={`overflow-x-scroll ${styles.message_list}`}>
        {generateList(20).map((item) => (
          <MessageCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default MessageList;
