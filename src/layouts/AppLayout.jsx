import { Outlet } from "react-router-dom";
import Header from "../components/partials/Header.jsx";
import Footer from "../components/partials/Footer.jsx";
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
