import { Navigate } from "react-router-dom";
import { BASE_ROUTES } from "../../routes/constansts";

export const RouteBase = ({ component }) => {
  const isAuthenticated = false; // Replace with actual auth logic

  if (isAuthenticated) {
    const Component = component;
    return <Component />;
  } else {
    return <Navigate to={BASE_ROUTES.AUTH} />;
  }
};

export default RouteBase;
