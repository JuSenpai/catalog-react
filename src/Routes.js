import Index from "./Page/Index";
import Login from "./Page/Login";
import Registration from "./Page/Registration";
import Laboratory from "./Page/Laboratory";
import Logout from "./Page/Logout";
import Dashboard from "./Page/Admin/Dashboard";
import LaborantAdmin from "./Page/Admin/LaborantAdmin";
import LaboratoryAdmin from "./Page/Admin/LaboratoryAdmin";
import StudentAdmin from "./Page/Admin/StudentAdmin";

export default [
    {component: Index, path: "/", exact: true, access: "user_auth"},
    {component: Registration, path: "/register", exact: true, access: "user_auth"},
    {component: Login, path: "/login", exact: true},
    {component: Laboratory, path: "/labs", exact: true, access: "user_auth"},
    {component: Logout, path: "/logout", exact: true, access: "user_auth"},
    {component: Dashboard, path: "/admin/dashboard", exact: true, access: "administrator"},
    {component: LaborantAdmin, path: "/admin/laborants", exact: true, access: "administrator"},
    {component: LaboratoryAdmin, path: "/admin/laboratories", exact: true, access: "administrator"},
    {component: StudentAdmin, path: "/admin/students", exact: true, access: "administrator"},
];