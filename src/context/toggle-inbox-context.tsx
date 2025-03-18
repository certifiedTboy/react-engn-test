import { ReactNode, createContext, useState } from "react";

export const MessageOptionContext = createContext({
  optionIsOpen: true,
  toggleMessageOption: () => {},
});

const MessageContextProvider = ({ children }: { children: ReactNode }) => {
  const [optionIsOpen, setOptionIsOpen] = useState<boolean>(true);

  const toggleMessageOption = () => {
    return setOptionIsOpen(!optionIsOpen);
  };

  const value = {
    optionIsOpen,
    toggleMessageOption,
  };

  return (
    <MessageOptionContext.Provider value={value}>
      {children}
    </MessageOptionContext.Provider>
  );
};

export default MessageContextProvider;
