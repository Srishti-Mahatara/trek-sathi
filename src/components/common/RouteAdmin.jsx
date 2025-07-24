import { Navigate } from "react-router-dom";
import { BASE_ROUTES } from "../../routes/constansts";

export const RouteAdmin = ({ component }) => {
  const isAuthenticated = true; // Replace with actual logic
  const isAdmin = true;

  if (isAuthenticated) {
    if (isAdmin) {
      const Component = component;
      return <Component />;
    } else {
      return <Navigate to={BASE_ROUTES.ROOT} />;
    }
  } else {
    return <Navigate to={BASE_ROUTES.AUTH} />;
  }
};

export default RouteAdmin;
