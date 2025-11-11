import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Bills from "../pages/Bills/Bills";
import BillDetails from "../pages/Details/BillDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/bills",
                element: <Bills></Bills>
            },
            {
                path: "/bill-details/:id",
                element: <BillDetails></BillDetails>
            },
            {
                path: "/my-pay-bills",
                element: <h1>this is my pay bills</h1>
            },

        ]

    },
]);

export default router;