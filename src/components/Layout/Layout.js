import { Outlet } from "react-router-dom";
import Footer from "./Shared/Footer/script";
const Layout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
