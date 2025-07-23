import { Outlet } from "react-router-dom";
import Header from "../components/partials/Header.jsx";
import Footer from "../components/partials/Footer.jsx";
import { AdminSidebar } from "../components/modules/admin/AdminSidebar/AdminSidebar.js";
const AdminLayout = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-row h-[93vh]"> 
        <AdminSidebar />
        <div className="flex-1 p-md h-full overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
