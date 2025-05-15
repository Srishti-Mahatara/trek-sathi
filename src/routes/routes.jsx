import HomePage from "../pages/home";
import { APP_ROUTES } from "./constansts";

export const AppRoutes = [
  { path: APP_ROUTES.APP_ROOT, element: <HomePage /> },
  // { path: APP_ROUTES.APP_ACCOUNTSETUP, element: <AccountSetup /> },
  // { path: APP_ROUTES.APP_COMPANYDETAILS, element: <CompanyDetails /> },
  // { path: APP_ROUTES.APP_CHAT, element: <StaffPage /> },
];

export const AuthRoutes = [
  // { path: AUTHENTICATION_ROUTES.AUTH_ROOT, element: <LoginForm /> },
  // { path: AUTHENTICATION_ROUTES.AUTH_SIGNUP, element: <SignupForm /> },
];

export const AdminRoutes = [
  // { path: ADMIN_ROUTES.DASHBOARD_ROOT, element: <AdminSetupPage /> },
  // { path: ADMIN_ROUTES.DASHBOARD_ROOT, element: <Admin /> },
];
