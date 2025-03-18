import Header from "./Header";
import SideBar from "./SiderBar";
import AppRoutes from "./AppRoutes";

// import AppR

const Layout = () => {
  return (
    <>
      <Header />

      <aside>
        <SideBar />
      </aside>
      <main>
        <AppRoutes />
      </main>
    </>
  );
};

export default Layout;
