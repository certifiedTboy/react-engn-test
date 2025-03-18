import { ReactNode, createContext, useState, useEffect } from "react";

export const MessageOptionContext = createContext({
  optionIsOpen: true,
  showAllInbox: true,
  showMobileInbox: false,
  toggleMessageOption: () => {},
  toggleShowAllInbox: () => {},
  toggleMobileInbox: () => {},
});

const MessageContextProvider = ({ children }: { children: ReactNode }) => {
  // inbox option state
  const [optionIsOpen, setOptionIsOpen] = useState<boolean>(true);

  // all inbox messages state
  const [showAllInbox, setShowAllInbox] = useState<boolean>(true);

  // mobile inbox state
  const [showMobileInbox, setShowMobileInbox] = useState<boolean>(false);

  // toggle inbox option state handler
  // it toggles the optionIsOpen state between a truthy and falsey value
  const toggleMessageOption = () => {
    return setOptionIsOpen(!optionIsOpen);
  };

  // toggle all inbox messages  state handler
  // it toggles the all inbox messages state between a truthy and falsey value
  const toggleShowAllInbox = () => {
    return setShowAllInbox(!showAllInbox);
  };

  const toggleMobileInbox = () => {
    return setShowMobileInbox(!showMobileInbox);
  };

  useEffect(() => {
    // close all inbox messages if inbox options is closed
    if (showAllInbox && !optionIsOpen) {
      setShowAllInbox(false);
    }
  }, [toggleMessageOption]);

  const value = {
    optionIsOpen,
    toggleMessageOption,
    showAllInbox,
    toggleShowAllInbox,
    toggleMobileInbox,
    showMobileInbox,
  };

  return (
    <MessageOptionContext.Provider value={value}>
      {children}
    </MessageOptionContext.Provider>
  );
};

export default MessageContextProvider;
