"use client"
import { useEffect, useRef, useState } from "react";
import Axios from "axios"
import { useNavigate } from "react-router-dom";
import { signupUserPass } from "../../../routers/routes";

export default function Password() {

    const navigate = useNavigate();

    const passRef = useRef<HTMLInputElement>(null);
    const pass2Ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        let savedId = sessionStorage.getItem("_userId");

        if (savedId == null)
            navigate("/register")

    }, [])

    const validate = () => {
        const password = passRef.current!.value;
        const confirmPassword = pass2Ref.current!.value;
        const userId = sessionStorage.getItem("_userId")

        if (userId == null) {
            navigate("/");
        } else {
            if (password == "") {
                alert("Please input a password")
            } else {
                if (password !== confirmPassword) {
                    alert("Passwords don't match")
                } else {
    
                    Axios.post(signupUserPass, {
                        userId: userId,
                        password: password
                    }).then((response) => {
                        if (response.data.acknowledged) {
                            alert("Signup was successful, you are currently being redirected to the login page")
                            sessionStorage.removeItem("_userId")
                            navigate("/");
                        }
                    })
                }
            }
        }
    }

    return (
        <form action="#">
            <div className="title-bar">
                <h1>Set a password</h1>
                <p>Password should at least contain a capital letter, lowercase letters and a number and should be at least 8 characters long</p>
            </div>

            <div className="input-area">
                <label htmlFor="password">Password</label>
                <input ref={passRef} type="password" name="password" id="password" />
            </div>

            <div className="input-area">
                <label htmlFor="password2">Confirm Password</label>
                <input ref={pass2Ref} type="password" name="password2" id="password2" />
            </div>

            <button type="button" onClick={validate}>Register</button>
        </form>
    )
}