import "./styles/root.scss";
import { router } from "./routers/router.js"
import { RouterProvider } from "react-router-dom";

export default function Root() {
    return <RouterProvider router={router} />
}

export function NotFound() {
    return (
        <div className="notFound">
            <h1>404 | Page Not Found</h1>
            <p onClick={() => history.back()}>Go Back</p>
        </div>
    )
}