import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Bills from "../pages/Bills/Bills";
import BillDetails from "../pages/Details/BillDetails";
import MyPayBills from "../pages/MyPayBills.jsx/MyPayBills";
import Profile from "../pages/Profile/Profile";
import About from "../pages/About/About";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";

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
                path: "/about",
                element: <About></About>
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
                element: <PrivateRoute>
                    <BillDetails></BillDetails>
                </PrivateRoute>
            },
            {
                path: "/my-pay-bills",
                element: <PrivateRoute>
                    <MyPayBills></MyPayBills>
                </PrivateRoute>
            },
            {
                path: "/profile",
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            },
            {
                path: "/*",
                element: <ErrorPage></ErrorPage>
            },
        ]

    },
]);

export default router;