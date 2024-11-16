import "./styles/form.scss";

import Axios from "axios"
import { Link, useNavigate } from "react-router-dom";

import { useRef } from "react";
import { loginRoute } from "../../root";

export default function Login() {

    const navigate = useNavigate();

    const passRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);

    const login = () => {
        const email = emailRef.current!.value;
        const password = passRef.current!.value;
        
        Axios.post(loginRoute, {
            email: email,
            password: password,
        }).then((response) => {
            if (response.data.user == false) {
                alert(response.data.msg)
            } else if (response.data.token) {
                sessionStorage.setItem("_token", response.data.token)
                navigate("/chat")
            }
        })
    }

    return (
        <div id="form-wrapper">
            <form action="#">
                <h1>Sign In</h1>

                <div className="input-area">
                    <label htmlFor="email">Email</label>
                    <input ref={emailRef} type="email" name="email" id="email" />
                </div>

                <div className="input-area">
                    <label htmlFor="password">Password</label>
                    <input ref={passRef} type="password" name="password" id="password" />
                </div>

                <button type="button" onClick={login}>Sign In</button>
                <p>Don't have an account yet? <Link to="/register">register here</Link></p>
            </form>
        </div>
    )
}