import { Navigate } from "react-router-dom";

export const RouteAuth = ({ component }) => {
  const isAuthenticated = false; // Replace with actual logic

  if (isAuthenticated) {
    return <Navigate to="/" />;
  } else {
    const Component = component;
    return <Component />;
  }
};

export default RouteAuth;
