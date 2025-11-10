import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                path: "/",
                element: <h1 className="min-h-screen">This is home</h1>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },

        ]

    },
]);

export default router;