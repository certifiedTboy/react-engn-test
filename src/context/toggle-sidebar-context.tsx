import { ReactNode, createContext, useState } from "react";

export const SidebarContext = createContext({
  barIsOpen: true,
  toggleSidebar: () => {},
  hideSideNav: false,
  toggleSideNav: () => {},
});

const SidebarContextProvider = ({ children }: { children: ReactNode }) => {
  const [barIsOpen, setBarOpen] = useState<boolean>(true);
  const [hideSideNav, setHideSideNav] = useState<boolean>(false);

  const toggleSidebar = () => {
    return setBarOpen(!barIsOpen);
  };

  const toggleSideNav = () => {
    return setHideSideNav(!hideSideNav);
  };

  const value = {
    barIsOpen,
    toggleSidebar,
    hideSideNav,
    toggleSideNav,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};

export default SidebarContextProvider;
