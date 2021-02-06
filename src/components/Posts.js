import React from 'react';
import Search from './Search';

const Posts = () => {


    return (
        <div>
            <Search />
            <h1>This is the Posts Page!</h1>
            



        </div>
    )

    fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts')
    .then(response => response.json())
    .then(result => {
        localStorage.setItem('posts', result);
      console.log(result);
    })
    .catch(console.error);




}
export default Posts;