import "./styles/form.scss";
import { Outlet } from "react-router-dom";

export default function Register() {
    return (
        <div id="form-wrapper">
            <Outlet />
        </div>
    )
}