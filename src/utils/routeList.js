import Dashboard from "../screens/Dashboard.js";
import Login from "../screens/Login.js";

export const mainRoutes = [
  {
    caption: "Login",
    linkTo: "login",
    icon: "",
    element: <Login />,
    authRequired: false,
    main_dashboard: false,
  },
  {
    caption: "Dashboard",
    linkTo: "/*",
    icon: "",
    element: <Dashboard />,
    authRequired: true,
    main_dashboard: true,
  },
];