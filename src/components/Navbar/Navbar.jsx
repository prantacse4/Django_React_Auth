import React, {Fragment} from "react";
import classes from './Navbar.module.css'   
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    // Link,
    NavLink
  } from "react-router-dom";

const Navbar = ({is_authenticated}) => {

    

const afterlogin = () => (
                <Fragment>
                    <li>
                    <NavLink  activeClassName={classes.active} exact to="/profile">Profile</NavLink>
                    </li>
                    
                </Fragment>
);
const notloggedin = () =>(
    <Fragment>
                <li>
                    <NavLink  activeClassName={classes.active} exact to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink  activeClassName={classes.active} exact to="/signup">Signup</NavLink>
                </li>
                <li>
                    <NavLink  activeClassName={classes.active} exact to="/hello/">Hello</NavLink>
                </li>
    </Fragment>

);
    return (
        <div>
            <Fragment>
            <ul className={classes.NavUl}>
                <li>
                    <NavLink   activeClassName={classes.active} exact  to="/">Home</NavLink>
                </li>
                
                { is_authenticated===true ? (
            afterlogin()
        ):(
            notloggedin()
        ) 
        }
            </ul>
        </Fragment>
        
        </div>
    );
};

export default Navbar;
