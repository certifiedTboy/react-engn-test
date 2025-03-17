import Header from "./Header";
import SideBar from "./SiderBar";
import AppRoutes from "./AppRoutes";

// import AppR

const Layout = () => {
  return (
    <div className="w-full h-full">
      <Header />

      <main>
        <aside>
          <SideBar />
        </aside>

        <AppRoutes />
      </main>
    </div>
  );
};

export default Layout;
