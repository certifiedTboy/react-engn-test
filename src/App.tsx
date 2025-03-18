import Layout from "./components/layout/Layout";
import SidebarContextProvider from "./context/toggle-sidebar-context";

const App = () => {
  return (
    <SidebarContextProvider>
      <Layout />
    </SidebarContextProvider>
  );
};

export default App;
