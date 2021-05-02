import React, {useState, useEffect} from "react";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import '../../Bootstrap/bootstrap.css';
import Login from "../Login/Login";
import axios from 'axios';
import {domain} from '../env';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Redirect,
    // Redirect,
    // Link,
    // NavLink
  } from "react-router-dom";
import {UserDataContext} from '../ContextAPI/AuthContext.jsx'

import Signup from "../Signup/Signup";
import Profile from "../Profile/Profile";
import Hello from "../Hello";
import Activate from "../Activate/Activate";


const Index = () => {
    const initAccess = 'KSJHUYAUHJCNJKWEYAJNCUNKNOWN';
    const baseURL = domain;
    const [user, setUser] = useState(null);

 const [is_authenticated, setIs_authenticated] = useState(false);
 const [data_isLoaded, setData_isLoaded] = useState(false);

    const LoginVerify = async() =>{
        try {
            const token = "token "+localStorage.getItem("auth_token");
            const config = {
                headers:{
                    'Authorization': token
                }
            }

            await axios.get(
                baseURL + "/auth/users/me/",
                config,
                
            ).then((response) => {
                console.log(response.data);
                setUser({
                    first_name:response.data.first_name,
                    last_name:response.data.last_name,
                    id:response.data.id,
                    email:response.data.email,
                });
                setIs_authenticated(true);
                setData_isLoaded(true);
                
            }).catch((error)=>{
                console.log(error);
                setIs_authenticated(false);
                setData_isLoaded(true);
            });
            
        } catch (error) {
            
        }
    }
    if (data_isLoaded==false) {
        LoginVerify();
        // setData_isLoaded(true);
    }

    useEffect(() => {
        setData_isLoaded(data_isLoaded);
    }, [data_isLoaded]);

 

    // useEffect(() => {
    //     console.log(user);
    //     if (user===null || user==="" && data_isLoaded==true) {
    //         console.log("Loaded");
    //         // setIs_authenticated(false);
    //         // setData_isLoaded(true);
    //         console.log(data_isLoaded);

    //     }
    //     else{
    //         // setIs_authenticated(true);
    //         // setData_isLoaded(true);

    //         // LoginVerify();
            
    //     }
    // }, [is_authenticated, data_isLoaded]);

 
    useEffect(() => {
        console.log("Get USer when Data loaded Change", user);
        console.log(is_authenticated)
        if(user!==null || user!==""){
            setIs_authenticated(true);
        }
        else{
            setIs_authenticated(false);
        }
    }, [data_isLoaded]);



    const logout = async () => {
        
        try {
            const tokenLog = "token " + localStorage.getItem("auth_token");
            const config = {
                headers: {
                    "Authorization": tokenLog,
                },
            };
            const logouturl = baseURL+"/auth/token/logout/";
            console.log(logouturl);

            await axios.post(logouturl,{},config)
                .then((response) => {
                    console.log(response);
                    
                    // setIs_authenticated(false);
                    // setData_isLoaded(false);
                    LoginVerify();
                    setUser(null);
                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (error) {
            console.log(error.response);
        }
    };

  

    return (
        data_isLoaded===true && 
        (
        <div>
            <Router>

            <Navbar user = {user} is_authenticated={is_authenticated}></Navbar>
                <Switch>
                    <Route exact path="/">
                        <Home user = {user} is_authenticated={is_authenticated} />
                    </Route>
                    <Route exact path="/login">
                        <Login  is_authenticated={is_authenticated} LoginVerify={LoginVerify} user={user} setIs_authenticated={setIs_authenticated} setUser={setUser}  />
                    </Route>

                    <Route exact path="/signup">
                        <Signup is_authenticated={is_authenticated} />
                    </Route>
                        
                    <Route exact path ="/profile">
                        <UserDataContext.Provider value={user}>
                            <Profile logout={logout} is_authenticated={is_authenticated}/>
                        </UserDataContext.Provider>
                        {/* <Profile is_authenticated={is_authenticated} user={user} setIs_authenticated={setIs_authenticated}  /> */}
                    </Route>
                    <Route 
                        exact 
                        path='/activate/:uid/:token'
                        component={Activate}
                    />
                     
                    <Route exact path ="/hello/">
                        <Hello />
                    </Route>
                </Switch>
            </Router>
            <div>

                {
                    is_authenticated===false ? (
                    <div className="text-center">
                        <div className="alert alert-danger">Not Logged IN</div>
                    </div>
                    ):(
                        <div className="alert alert-success">Logged In Successfully</div>
                    )
                }
            </div>
       
        
        
        
        
        </div>
        )




    );
};

export default Index;
