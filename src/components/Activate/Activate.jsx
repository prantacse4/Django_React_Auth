import axios from "axios";
import React, {useState} from "react";
import {domain} from '../env';

const Activate = ({ match }) => {
    const [verified, setVerified] = useState(false);
    const baseURL = domain;
    const verify_account = async(e) => {
        const uid = match.params.uid;
        const token = match.params.token;
        const body = {
            "uid": uid,
            "token":token
        }
        const config = {
            headers:{
                "Content-Type": "application/json",
            }
        }
        try {
            await axios.post(baseURL+"/auth/users/activation/",body,config)
            .then((response)=>{
                setVerified(true);
                if (verified) {
                    return window.location.href = "http://localhost:3000/login";
                    // return <Redirect to='/login' /> for production
                }
            })
            .catch((error)=>{


            })
        } catch (error) {
            
        }
       
    };

    if (verified) {
        return window.location.href = "http://localhost:3000/login";
        // return <Redirect to='/login' /> for production
    }

    return (
        <div>
            <div className="container">
                <div className="p-5 m-5 text-center">
                    <button onClick={verify_account} className="btn btn-warning p-4 text-white text-center">Activate</button>
                </div>
            </div>
        </div>
    );
};

export default Activate;
