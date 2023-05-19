import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/HomePages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blog from "../Pages/Blog/Blog";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddAtoy from "../Pages/AddAToy/AddAtoy";
import Login from "../Pages/LoginForm/Login";
import Register from "../Pages/LoginForm/Register";
import PrivateRoute from "./PrivateRoute";
import SingleDetails from "../Pages/SingleDetails/SingleDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>
            },
            {
                path: '/singleDetails/:id',
                element: <PrivateRoute>
                    <SingleDetails></SingleDetails>
                </PrivateRoute>,
                // loader: ({params}) => fetch('')
            },
            {
                path: '/myToys',
                element: <PrivateRoute>
                    <MyToys></MyToys>
                </PrivateRoute>
            },
            {
                path: '/addAToy',
                element: <PrivateRoute>
                    <AddAtoy></AddAtoy>
                </PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
]);

export default router;