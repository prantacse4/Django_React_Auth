import React, { useState } from "react";
import { Redirect } from "react-router";
import axios from "axios";
import { domain } from "../env";
const Signup = ({ is_authenticated }) => {
    const baseURL = domain;
    const [first_name, setfirst_name] = useState(null);
    const [last_name, setlast_name] = useState(null);
    const [email, setemail] = useState(null);
    const [password, setPassword] = useState(null);
    const [re_password, setRe_Password] = useState(null);

    const [gotError, setGotError] = useState(null);
    const [signupdata, setsignupdata] = useState({
        username: "",
        email: "",
        password: "",
    });

    const passwordChange = (event) => {
        setPassword(event.target.value);
    };
    const re_passwordChange = (event) => {
        setRe_Password(event.target.value);
    };
    const first_nameChange = (event) => {
        setfirst_name(event.target.value);
    };
    const last_nameChange = (event) => {
        setlast_name(event.target.value);
    };

    const emailChange = (event) => {
        setemail(event.target.value);
    };

    const SignupSubmit = async (event) => {
        event.preventDefault();

        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const body = JSON.stringify({
                "first_name": first_name,
                "last_name": last_name,
                "email": email,
                "password": password,
                "re_password": re_password,
            });

            console.log(body);
            if (password === re_password) {
                await axios
                    .post(baseURL + "/auth/users/", body, config)
                    .then((response) => {
                        
                            alert("Signup Successfull. Activate Account from your Email. Then you can login");
                        
                    })
                    .catch((error) => {
                        console.log(error.response);
                        alert("Something Wrong");
                    });
            } else {
                alert("Confirm Password Doen't Match");
            }
        } catch (error) {
            console.log(error.response.data);
            // throw error;
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
                        <h4>Signup</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={SignupSubmit}>
                            <div className="form-group">
                                <label className="form-control-label mt-2">
                                    First Name {first_name}
                                </label>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    required
                                    className="form-control"
                                    onChange={first_nameChange}
                                />

                                <label className="form-control-label mt-2">
                                    Last Name {last_name}
                                </label>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    required
                                    className="form-control"
                                    onChange={last_nameChange}
                                />

                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-control-label mt-2">
                                            Email
                                        </label>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <label className="form-control-label mt-2 text-danger">
                                            <b>Wrong Email or Password</b>
                                        </label>
                                    </div>
                                </div>
                                <input
                                    type="email"
                                    placeholder="xyz@email.com"
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

                                <label className="form-control-label mt-2">
                                    Re-Password {re_password}
                                </label>
                                <input
                                    type="password"
                                    placeholder="******"
                                    required
                                    className="form-control"
                                    onChange={re_passwordChange}
                                />

                                <button className="btn btn-primary mt-3" onClick={SignupSubmit}>
                                    Signup
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
