import React, { useState } from 'react';

//
const Search = () => {

    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    function postMatches(post, text) {

    // return true if any of the fields you want to check against include the text
    // strings have an .includes() method 
    }

    const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
    const postsToDisplay = searchTerm.length ? filteredPosts : posts;

    return (
        <div>
            <h1>This is the Search Component!</h1>
            <form>
                <label>
                Search:
                <input type="text" required minLength='1' onChange={ (event) => {(event.target.value)}}/>
                <button type="submit" value="submit">Submit</button>
                </label>
            </form>
        </div>
// then, in our jsx below... map over postsToDisplay instead of posts
    )
}




/*
const Search = () => {


    return (
        <div>
            <h1>This is the Search Component!</h1>
            <form>
                <label>
                Search:
                <input type="text" required minLength='1' onChange={ (event) => {setPassword(event.target.value)}}/>
                <button type="submit" value="submit">Submit</button>
                </label>
            </form>




        </div>
    )
}
*/

export default Search;