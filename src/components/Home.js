import React from 'react';

const Home = () => {
    return (
        //<h1>This is the Home Page</h1>
        <div>
            <h1>This is the login Page!</h1>
            <form>
                <label>
                Username:
                <input type="text" name="username" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <form>
                <label>
                Password:
                <input type="password" name="password" />
                </label>
                <input type="submit" value="Submit" />
            </form>

        </div>
    )
}
export default Home;