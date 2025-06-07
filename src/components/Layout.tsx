import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  const location = useLocation();

  // Don't show header on auth pages
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="min-h-screen bg-gray-50">
      {!isAuthPage && <Header />}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
