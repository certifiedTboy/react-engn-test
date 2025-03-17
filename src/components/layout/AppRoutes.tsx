import { Route, Routes, Navigate } from "react-router-dom";
import InboxPage from "../../pages/InboxPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/inbox" replace={true} />} />
      <Route path="/inbox" element={<InboxPage />} />
    </Routes>
  );
};

export default AppRoutes;
