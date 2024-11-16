import "./styles/root.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Information from "./modules/form/views/Information"
import Password from "./modules/form/views/Password"
import Signup from "./modules/form/views/signup"
import Login from "./modules/form/login"
import App from "./modules/home/app"
import Register from "./modules/form/register"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />,
        children: [
            {
                path: "/register/",
                element: <Signup />
            },
            {
                path: "/register/info",
                element: <Information />
            },
            {
                path: "/register/password",
                element: <Password />
            }
        ]
    },
    {
        path: "/justchat",
        element: <App />
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default function Root() {
    return <RouterProvider router={router} />
}

function NotFound() {
    return (
        <div className="notFound">
            <h1>404 | Page Not Found</h1>
        </div>
    )
}