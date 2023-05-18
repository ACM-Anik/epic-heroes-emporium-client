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
               path: '/myToys',
               element: <MyToys></MyToys>
            },
            {
               path: '/addAToy',
               element: <AddAtoy></AddAtoy>
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