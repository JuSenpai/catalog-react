import Index from "./Page/Index";
import Login from "./Page/Login";
import Registration from "./Page/Registration";
import Laboratory from "./Page/Laboratory";
import Logout from "./Page/Logout";
import Dashboard from "./Page/Admin/Dashboard";
import LaborantAdmin from "./Page/Admin/LaborantAdmin";
import LaboratoryAdmin from "./Page/Admin/LaboratoryAdmin";
import StudentAdmin from "./Page/Admin/StudentAdmin";
import UserAdmin from "./Page/Admin/UserAdmin";
import Profile from "./Page/Profile";
import Error from "./Page/Error";

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
    {component: UserAdmin, path: "/admin/users", exact: true, access: "administrator"},
    {component: Profile, path: "/profile/:user", exact: true, access: "user_auth"},
    {component: Error, path: "/not-found", exact: true, access: "user_auth", props: { title: "404 - Ceva nu a putut fi găsit" }}
];