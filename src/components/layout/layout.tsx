import { useContext } from "react";
import { SidebarContext } from "../../context/toggle-sidebar-context";
import Header from "./Header";
import SideBar from "./SiderBar";
import AppRoutes from "./AppRoutes";

// import AppR

const Layout = () => {
  const { barIsOpen } = useContext(SidebarContext);
  return (
    <div className="w-full h-full">
      <Header />
      {barIsOpen && (
        <aside>
          <SideBar />
        </aside>
      )}
      <main>
        <AppRoutes />
      </main>
    </div>
  );
};

export default Layout;
