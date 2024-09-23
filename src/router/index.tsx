import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "@/pages/home/Home";
import Archive from "@/pages/archive/Archive";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/archive",
        element: <Archive />,
    }
]);


export default function Router() {
    return <RouterProvider router={router} />
}