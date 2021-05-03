import React from 'react'

const Home = ({is_authenticated, user}) => {
    console.log(is_authenticated);
    console.log(user);
    return (
        
        <div>
            <h1 className="card card-header text-center"><b>DJANGO REST BACKEND</b></h1>
            <h3 className="text-center">REACT FRONTEND</h3>
            <h3 className="text-center"><b>Featured Authentication System</b></h3>
        </div>
    )
}

export default Home
