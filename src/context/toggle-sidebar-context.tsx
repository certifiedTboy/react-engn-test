import { ReactNode, createContext, useState } from "react";

export const SidebarContext = createContext({
  barIsOpen: true,
  toggleSidebar: () => {},
});

const SidebarContextProvider = ({ children }: { children: ReactNode }) => {
  const [barIsOpen, setBarOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    return setBarOpen(!barIsOpen);
  };

  const value = {
    barIsOpen,
    toggleSidebar,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};

export default SidebarContextProvider;
