import Header from "./Header";
import SideBar from "./SiderBar";

const Layout = () => {
  return (
    <div className="w-full h-full">
      <Header />

      <aside className="">
        <SideBar />
      </aside>
    </div>
  );
};

export default Layout;
