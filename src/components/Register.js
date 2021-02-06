import React from 'react';


const Register = () => {
  
    

    return (
        
        <div>
            <h1>Register Now!</h1>

            <br></br>

            <form>
                <label>
                First Name:
                <input type="text" required onChange={ (event) => {setUserName(event.target.value)}}/>
                </label>
            </form>

            <br></br>

            <form>
                <label>
                Last Name:
                <input type="text" required onChange={ (event) => {setUserName(event.target.value)}}/>
                </label>
            </form>

            <br></br>
            
            <form>
                <label>
                Email:
                <input type="text" name="email" required onChange={ (event) => {setUserName(event.target.value)}}/>
                </label>
            </form>

            <br></br>

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
            </form>

            <br></br>

            <form>
                <label>
                Confirm Password:
                <input type="password" name="confirmPassword" required minLength='8' onChange={ (event) => {setPassword(event.target.value)}}/>
                </label>
                <button type="submit" value="submit">Submit</button>
            </form>

        </div>
    )
}





export default Register;