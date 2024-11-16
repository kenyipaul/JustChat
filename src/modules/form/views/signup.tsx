import { useRef } from "react"
import { Link } from "react-router-dom";

export default function Signup() {

    const usernameRef = useRef<HTMLInputElement>(null);
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);

    const validate = () => {

    }

    return (
        <form action="#">
            <h1>Create new account</h1>

            <div className="input-area">
                <label htmlFor="username">User Name</label>
                <input ref={usernameRef} type="text" name="username" id="username" />
            </div>

            <div className="multi-input-area">
                <div className="input-area">
                    <label htmlFor="firstName">First Name</label>
                    <input ref={firstNameRef} type="text" name="firstName" id="firstName" />
                </div>
                <div className="input-area">
                    <label htmlFor="lastName">Last Name</label>
                    <input ref={lastNameRef} type="text" name="lastName" id="lastName" />
                </div>
            </div>

            <div className="input-area">
                <label htmlFor="email">Email</label>
                <input ref={emailRef} type="email" name="email" id="email" />
            </div>

            <button type="button" onClick={validate}>Proceed</button>
            <p>I already have an account? <Link to="/">login here</Link></p>
        </form>
    )
}