import IdPage from "../pages/IdPage";
import InvitePage from "../pages/InvitePage";
import LogPage from "../pages/LogPage";

const routes = [
    {
        path: "/",
        element: <InvitePage />
    }, 
    {
        path: "log/:id",
        element: <LogPage />
    },
    {
        path: "ids",
        element: <IdPage />
    }
];

export default routes;