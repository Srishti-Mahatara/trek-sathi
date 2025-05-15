import LoginPage from "../pages/auth/login/LoginPage";
import SignupPage from "../pages/auth/signup/SignupPage";
import HomePage from "../pages/home";
import { APP_ROUTES, AUTHENTICATION_ROUTES } from "./constansts";

export const AppRoutes = [
    { path: APP_ROUTES.APP_ROOT, element: <HomePage /> },
    { path: APP_ROUTES.APP_PROFILE, element: <div>Profile page</div> },
    { path: APP_ROUTES.APP_EXPLORE, element: <div>Explore page</div> }];

export const AuthRoutes = [
  { path: AUTHENTICATION_ROUTES.AUTH_ROOT, element: <LoginPage /> },
  { path: AUTHENTICATION_ROUTES.AUTH_SIGNUP, element: <SignupPage /> },
];

export const AdminRoutes = [
  // { path: ADMIN_ROUTES.DASHBOARD_ROOT, element: <AdminSetupPage /> },
  // { path: ADMIN_ROUTES.DASHBOARD_ROOT, element: <Admin /> },
];
