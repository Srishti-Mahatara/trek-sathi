import { Routes, Route } from "react-router-dom";
import { AppRoutes, AuthRoutes, AdminRoutes } from "./routes";
import AppLayout from "../layouts/AppLayout";

// import LoginLayout from "../layouts/LoginLayout";
// import RouteAuth from "../components/common/RouteAuth";
// import RouteAdmin from "../components/common/RouteAdmin";
import AdminLayout from "../layouts/AdminLayout";
import RouteBase from "../components/common/RouteBase";
import { BASE_ROUTES } from "./constansts";
import RouteAuth from "../components/common/RouteAuth.jsx";
import LoginLayout from "../layouts/LoginLayout.jsx";
import RouteAdmin from "../components/common/RouteAdmin.jsx";

const MainRoute = () => {
  return (
    <Routes>
      <Route
        path={BASE_ROUTES.ROOT}
        element={<RouteBase component={AppLayout} />}
      >
        {AppRoutes.map((appRoute, index) => {
          return (
            <Route
              path={appRoute.path}
              element={appRoute.element}
              key={index}
            />
          );
        })}
      </Route>

      <Route
        path={BASE_ROUTES.AUTH}
        element={<RouteAuth component={LoginLayout} />}
      >
        {AuthRoutes.map((authRoute, index) => {
          return (
            <Route
              path={authRoute.path}
              element={authRoute.element}
              key={index}
            />
          );
        })}
      </Route>
      
      <Route
        path={BASE_ROUTES.ADMIN}
        element={<RouteAdmin component={AdminLayout} />}
      >
        {AdminRoutes.map((appRoute, index) => {
          return (
            <Route
              path={appRoute.path}
              element={appRoute.element}
              key={index}
            />
          );
        })}
      </Route>
    </Routes>
  );
};

export default MainRoute;
