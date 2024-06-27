import GuestLayout from "./Layouts/GuestLayout";
// import DefaultLayout from "./Layouts/DefaultLayout";
import Login from "./Pages/Login";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Products from "./Pages/Products";
import BaseLayout from "./Layouts/BaseLayout";
import Signup from "./Pages/Signup";
import Users from "./Pages/Users";
import NotFound from "./Pages/NotFound";
import ProductForm from "./Pages/ProductForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: "/products/new",
                element: <ProductForm key="productCreate" />,
            },
            {
                path: "/products/:id",
                element: <ProductForm key="productUpdate" />,
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router