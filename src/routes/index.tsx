import InvitePage from "../pages/InvitePage";
import LogPage from "../pages/LogPage";

const routes = [
    {
        path: "/",
        element: <InvitePage />
    }, 
    {
        path: "log",
        element: <LogPage />
    }
];

export default routes;