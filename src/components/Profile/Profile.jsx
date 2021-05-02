import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router";
import { UserDataContext } from "../ContextAPI/AuthContext.jsx";
import { domain } from "../env";
import axios from "axios";
const Profile = ({ is_authenticated, logout }) => {
    const [isauth, setisauth] = useState(is_authenticated);
    useEffect(() => {
        setisauth(is_authenticated);
    }, [isauth])

    console.log(isauth);
    const pranta = useContext(UserDataContext);
    const baseURL = domain;


    // const logout = async (event) => {
    //     try {
    //         const tokenLog = "token " + localStorage.getItem("auth_token");
    //         const config = {
    //             headers: {
    //                 "Authorization": tokenLog,
    //             },
    //         };
    //         const logouturl = baseURL+"/auth/token/logout/";
    //         console.log(logouturl);

    //         await axios.post(logouturl,{},config)
    //             .then((response) => {
    //                 console.log(response);
    //                 setisauth(false);
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             });
    //     } catch (error) {
    //         console.log(error.response);
    //     }
    // };

    const logoutuser =(e)=>{
        logout();
        setisauth(false);
        e.preventDefault();
    }

    if (isauth === false) {
        return <Redirect exact to="/login" />;
    }
    return (
        <div>
            <div className="container">
                <div className="card mt-4">
                    <div className="card-header bg-primary text-white">
                        <h3>UserProfile</h3>
                    </div>
                    <div className="card-body">
                        <div className="alert alert-success">
                            <h3>
                                <b>
                                    {pranta.first_name} {pranta.last_name}
                                </b>
                            </h3>
                            <h3>Email : {pranta.email}</h3>
                        </div>

                        <button
                            className="mt-3 btn btn-danger"
                            onClick={logoutuser}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
