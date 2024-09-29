import { createBrowserRouter } from "react-router-dom";

import { Home } from "@/pages/home/Home";
import { Projects } from "@/pages/projects/Projects";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/projects",
        element: <Projects />
    }
]);


export { 
    Routes
}