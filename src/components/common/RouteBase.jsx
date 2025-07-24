import { Navigate, useLocation } from "react-router-dom";
import { AUTHENTICATED_ROUTES, BASE_ROUTES } from "../../routes/constansts";

const protectedRoutes = [
  AUTHENTICATED_ROUTES.APP_PROFILE,
  AUTHENTICATED_ROUTES.APP_EXPLORE,
  AUTHENTICATED_ROUTES.APP_CHAT,
];

const RouteBase = ({ component }) => {
  const isAuthenticated = false; // Replace with actual auth logic
  const { pathname } = useLocation();

  const isProtected = protectedRoutes.some((route) => pathname.includes(route));

  if (!isAuthenticated && isProtected) {
    return <Navigate to={BASE_ROUTES.AUTH} />;
  }
  const Component = component;
  return <Component />;
};

export default RouteBase;
