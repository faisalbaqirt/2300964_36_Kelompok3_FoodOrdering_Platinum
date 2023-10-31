import AdminDashboard from "./components/AdminDashboard"
import AdminUsers from "./components/AdminUsers";
import AdminProducts from "./components/AdminProducts";
import AdminOrders from "./components/AdminOrders";

const routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "bi bi-speedometer2",
    component: <AdminDashboard />,
    layout: "/admin",
  },
  {
    path: "/users",
    name: "Users",
    icon: "bi bi-people",
    component: <AdminUsers />,
    layout: "/admin",
  },
  {
    path: "/products",
    name: "Products",
    icon: "bi bi-grid",
    component: <AdminProducts />,
    layout: "/admin",
  },
  {
    path: "/orders",
    name: "Orders",
    icon: "bi bi-table",
    component: <AdminOrders />,
    layout: "/admin",
  },
];
export default routes;
