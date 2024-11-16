import { createBrowserRouter } from "react-router-dom"

import { NotFound } from "../root"

import Information from "../modules/form/views/Information"
import Password from "../modules/form/views/Password"
import Signup from "../modules/form/views/signup"
import Login from "../modules/form/login"
import App from "../modules/home/app"
import Register from "../modules/form/register"

import Settings from "../modules/home/views/settings"
import People, { FriendRequestTab, PeopleTab } from "../modules/home/views/people"
import Chats from "../modules/home/views/chats"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />,
        children: [
            {
                path: "/register",
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
        element: <App />,
        children: [
            {
                path: "/justchat/",
                element: <Chats />
            },
            {
                path: "/justchat/people",
                element: <People />,
                children: [
                    {
                        path: "/justchat/people/",
                        element: <PeopleTab />
                    },
                    {
                        path: "/justchat/people/friendrequests",
                        element: <FriendRequestTab />
                    }
                ]
            },
            {
                path: "/justchat/settings",
                element: <Settings />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])