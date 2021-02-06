import React from 'react';
import { useState } from 'react';

const Register = () => {
    
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function register() { 
        fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/users/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: userName,
                    password: password,
                }
            })
            }).then(response => response.json())
              .then(result => { 
                //let token = result.data.token
                //console.log(token);
                //localStorage.setItem('token', token);
                console.log(result);
            }).catch(console.error);
        }

    return (
        
        <div>
            <h1>Register Now!</h1>

            <br></br>

            <form>
                <label>
                Username:
                <input type="text" name="username" required onChange={ (event) => {setUserName(event.target.value)}}/>
                </label>
                <label>
                Password:
                <input type="password" name="password" required minLength='8' onChange={ (event) => {setPassword(event.target.value)}}/>
                </label>
                <input type="button" value="submit" onClick={register()} />
            </form>

            <br></br>
            {/*             
            <form>
                <label>
                Password:
                <input type="password" name="password" required minLength='8' onChange={ (event) => {setPassword(event.target.value)}}/>
                </label>
                <input type="button" value="submit" onClick={register()} />
            </form>
                */}
        </div>
    )
}





export default Register;