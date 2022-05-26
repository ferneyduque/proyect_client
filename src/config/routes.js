import LayoutAdmin from "../layouts/LayoutAdmin";
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/singln/signln";
import Home from "../pages/home";
import NotFound from "../pages/NotFound";

import Contact from "../pages/contact"
import LayoutBasic from "../layouts/LayoutBasic";

const routesAdmin = [
    {
        path: "/admin",
        layout: LayoutAdmin,
        component: AdminHome,
    },
    {
        path: "/admin/login",
        layout: LayoutAdmin,
        component: AdminSignIn,
    },
];

const routesClient = [
    {
        path: "/",
        layout: LayoutBasic,
        component: Home,
    },
    {
        path: "/contact",
        layout: LayoutBasic,
        component: Contact,
    },
];

const routeNotFound = [
    {
        path: "*",
        layout: LayoutBasic,
        component: NotFound,
    },
];

const routes = [...routesAdmin, ...routesClient, ...routeNotFound]
export default routes;