export const BASE_ROUTES = {
  ROOT: "/",
  AUTH: "/auth",
  ADMIN: "/dashboard",
};

export const AUTHENTICATED_ROUTES = {
  APP_PROFILE: "profile",
  APP_EXPLORE: "explore",
  APP_CHAT: "chat",
};

export const APP_ROUTES = {
  APP_ROOT: "",
  APP_PROFILE: "profile",
  APP_EXPLORE: "explore",
  APP_CHAT: "chat",
  LOCATION_DETAIL: "location/:id",
  HOTEL_DETAIL: "hotel/:id",
  SEARCH: "search",
  CONTACT_US: "contact-us",
};

export const AUTHENTICATION_ROUTES = {
  AUTH_ROOT: "",
  AUTH_SIGNUP: "signup",
  AUTH_FORGOT: "forgot",
  AUTH_VERIFY: "verify",
  AUTH_RESET: "reset",
};

export const ADMIN_ROUTES = {
  DASHBOARD_ROOT: "",
  DASHBOARD_USERS: "users",
  DASHBOARD_LOCATIONS: "locations",
  DASHBOARD_HOTELS: "hotels",
  DASHBOARD_POSTS: "posts",
};
