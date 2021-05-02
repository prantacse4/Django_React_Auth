import React from 'react'

const Home = ({is_authenticated, user}) => {
    console.log(is_authenticated);
    console.log(user);
    return (
        
        <div>
            <h1 className="card card-header text-center"><b>DAY : 2 (Protect Routes and Login with <br/> Local Storage from the browser)</b></h1>
            <h3 className="text-center">React Frontend + Django Rest API</h3>
            <h3 className="text-center"><b>JWT Authentication System</b></h3>
        </div>
    )
}

export default Home
