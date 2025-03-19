import { useLocation } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SiderBar";
import AppRoutes from "./AppRoutes";
import { SEO } from "../../helpers/seo";

const Layout = () => {
  const location = useLocation();

  const { pathname } = location;

  let SEOData = {};

  if (pathname === "/" || pathname === "/inbox") {
    SEOData = {
      title: "Mail - Inbox",
      metaDescription: "All email messages and inboxes in one place",
    };
  } else {
    SEOData = {
      title: "404 - Not Found",
      metaDescription: "Page not found",
    };
  }

  SEO(SEOData);

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
