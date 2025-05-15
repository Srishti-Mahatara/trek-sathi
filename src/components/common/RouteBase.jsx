import { Navigate } from "react-router-dom";
import { BASE_ROUTES } from "../../routes/constansts";

const isAuthenticated = true;

export const RouteBase = ({ component: Component }) => {
  if (isAuthenticated) {
    return <Component />;
  } else {
    return <Navigate to={BASE_ROUTES.AUTH} />;
  }
};

export default RouteBase;
