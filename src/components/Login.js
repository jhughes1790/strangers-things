import React, { useState } from 'react';



const Login = () => {
    

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');


  function apiRegister() {
    fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/users/login', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: userName,
      password: password
    }
  })
}).then(response => response.json())
  .then(result => {
    localStorage.setItem('token', result.data.token);
    console.log(result);
  })
  .catch(console.error);
}



    return (
        <div>
            <h1>Please Login!</h1>
            <form>
                <label>
                Username:
                <input type="text" name="username" required onChange={ (event) => {setUserName(event.target.value)}}/>
                </label>
            </form>
            <br></br>
            <form>
                <label>
                Password:
                <input type="password" name="password" required minLength='8' onChange={ (event) => {setPassword(event.target.value)}}/>
                </label>
                <input type="submit" value="submit" onClick={apiRegister()} />
            </form>


        </div>
    )
}



export default Login;