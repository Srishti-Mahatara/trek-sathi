import LoginPage from "../pages/auth/login/LoginPage";
import SignupPage from "../pages/auth/signup/SignupPage";
import HomePage from "../pages/home";
import { APP_ROUTES, AUTHENTICATION_ROUTES } from "./constansts";
import { LocationDetail } from "../pages/location-detail/index.jsx";
import HotelDetail from "../pages/hotel-detail/index.jsx";
import SearchPage from "../pages/search/index.jsx";
import ExplorePage from "../pages/explore/index.jsx";
import ProfilePage from "../pages/profile/index.jsx";
import Chat from "../pages/chat/index.jsx";
import ContactUsPage from "../pages/contact-us/index.jsx";

export const AppRoutes = [
  { path: APP_ROUTES.APP_ROOT, element: <HomePage /> },
  { path: APP_ROUTES.APP_PROFILE, element: <ProfilePage /> },
  { path: APP_ROUTES.APP_EXPLORE, element: <ExplorePage /> },
  { path: APP_ROUTES.LOCATION_DETAIL, element: <LocationDetail /> },
  { path: "hotel/:id", element: <HotelDetail /> },
  { path: "search", element: <SearchPage /> },
  { path: APP_ROUTES.APP_CHAT, element: <Chat /> },
  { path: APP_ROUTES.CONTACT_US, element: <ContactUsPage /> },
];

export const AuthRoutes = [
  { path: AUTHENTICATION_ROUTES.AUTH_ROOT, element: <LoginPage /> },
  { path: AUTHENTICATION_ROUTES.AUTH_SIGNUP, element: <SignupPage /> },
];

export const AdminRoutes = [
  // { path: ADMIN_ROUTES.DASHBOARD_ROOT, element: <AdminSetupPage /> },
  // { path: ADMIN_ROUTES.DASHBOARD_ROOT, element: <Admin /> },
];
