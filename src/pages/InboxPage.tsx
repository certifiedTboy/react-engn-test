import Inbox from "../components/inbox/Inbox";
import MessageContextProvider from "../context/toggle-inbox-context";
const InboxPage = () => {
  return (
    <MessageContextProvider>
      <Inbox />
    </MessageContextProvider>
  );
};

export default InboxPage;
