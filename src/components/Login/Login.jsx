import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import axios from "axios";
import {domain} from '../env';

const Login = ({ is_authenticated, user, setUser, setIs_authenticated, LoginVerify }) => {
    const baseURL = domain;
    const [email, setemail] = useState(null);
    const [password, setPassword] = useState(null);
    const [gotError, setGotError] = useState(null);
    const [logindata, setlogindata] = useState({
        email: "",
        password: "",
    });

    const passwordChange = (event) => {
        setPassword(event.target.value);
    };
    const emailChange = (event) => {
        setemail(event.target.value);
    };

    const LoginSubmit = async (event) => {
        event.preventDefault();

        try {
            const config = {
                headers:{
                    "Content-Type": "application/json",
                    'accept': 'application/json',
                }
            }
            const body = JSON.stringify({
                "email": email,
                "password":password
            })
            await axios.post(
                baseURL + "/auth/token/login/",body,
                config,
                
            ).then((response) => {
                console.log(response.data.auth_token);
                if (response.data.auth_token) {
                    localStorage.setItem("auth_token", response.data.auth_token)
                    LoginVerify();
                    setIs_authenticated(true);
                }
            }).catch((error)=>{
                console.log(error);
                alert("Login credentials doesn't match");
            });
        } catch (error) {
            
            console.log(error.response);
        }
    };

    if (is_authenticated === true) {
        return <Redirect exact to="/" />;
    }

    return (
        <div>
            <div className="container mt-3">
                <div className="card">
                    <div className="card-header bg-primary text-white">
                        <h4>Login</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={LoginSubmit}>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-control-label mt-2">
                                            email {email}
                                        </label>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        {gotError ? (
                                            <label className="form-control-label mt-2 text-danger">
                                                <b>{gotError}</b>
                                            </label>
                                        ) : (
                                            <div></div>
                                        )}
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    placeholder="email"
                                    required
                                    className="form-control"
                                    onChange={emailChange}
                                />
                                <label className="form-control-label mt-2">
                                    Password {password}
                                </label>
                                <input
                                    type="password"
                                    placeholder="******"
                                    required
                                    className="form-control"
                                    onChange={passwordChange}
                                />

                                <button className="btn btn-primary mt-3">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
