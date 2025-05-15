import { Outlet } from "react-router-dom";
import Header from "../components/partials/Header.jsx";
import Footer from "../components/partials/Footer.jsx";

const LoginLayout = () => {
  return (
    <>
        <Header/>
            <Outlet />
        <Footer/>
    </>
  );
};

export default LoginLayout;
