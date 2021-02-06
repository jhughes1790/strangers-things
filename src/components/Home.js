import React from 'react';
import Login from './Login';
import Register from './Register';



const Home = () => {
    return (
        
        <div>
            <h1>Welcome!</h1>
            <Login />
            <h1>OR</h1>
            <Register />

        </div>
    )
}
export default Home;