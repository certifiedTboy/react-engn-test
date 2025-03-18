import Header from "./Header";
import SideBar from "./SiderBar";
import AppRoutes from "./AppRoutes";

// import AppR

const Layout = () => {
  return (
    <>
      <Header />

      <main>
        <SideBar />

        <AppRoutes />
      </main>
    </>
  );
};

export default Layout;
