import Dashboard from "views/Dashboard/Dashboard.jsx";
import Notifications from "views/Notifications/Notifications.jsx";
import Icons from "views/Icons/Icons.jsx";
import Typography from "views/Typography/Typography.jsx";
import TableList from "views/TableList/TableList.jsx";
import Maps from "views/Maps/Maps.jsx";
import UserPage from "views/UserPage/UserPage.jsx";
import Analytics from "views/Analytics/Analytics.jsx";
import Login from "views/Login";

var dashRoutes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-sound-wave",
    component: Dashboard
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: "nc-icon nc-calendar-60",
    component: Analytics
  },
  {
    path: "/assessment-schedule",
    name: "Assessment Schedule",
    icon: "nc-icon nc-calendar-60",
    component: Icons
  },
  { 
    path: "/complaints", 
    name: "Complaints", 
    icon: "nc-icon nc-paper", 
    component: Maps 
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications
  },
  {
    path: "/permission",
    name: "Permission",
    icon: "nc-icon nc-single-02",
    component: UserPage
  },
  {
    path: "/suggestion",
    name: "Suggestion",
    icon: "nc-icon nc-tile-56",
    component: TableList
  },
  {
    path: "/time-table",
    name: "Time Table",
    icon: "nc-icon nc-caps-small",
    component: Typography
  },
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-spaceship"
  // },
  { redirect: true, path: "/", pathTo: "/login", name: "Login" }
];
export default dashRoutes;
