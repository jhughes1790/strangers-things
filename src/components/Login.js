import React from 'react';


const Login = () => {
    

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
    return (
        <div>
            <h1>This is the login Page!</h1>
            <form>
                <label>
                Username:
                <input type="text" name="username" onChange={ (event) => {setUserName(event.target.value)}}/>
                </label>
                <button type="submit" value="Submit" />
            </form>
            <br></br>
            <form>
                <label>
                Password:
                <input type="password" name="password" onChange={ (event) => {setPassword(event.target.value)}}/>
                </label>
                <button type="submit" value="Submit" />
            </form>

        </div>
    )
}

function apiRegister() {
    fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/users/register', {
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
    console.log(result);
  })
  .catch(console.error);
}

export default Login;