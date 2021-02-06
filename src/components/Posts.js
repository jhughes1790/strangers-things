import React from 'react';
import Search from './Search';
import Axios from 'axios';




const Posts = () => {
    
    const token = localStorage.getItem('token')
    
    fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/posts', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({ /* whatever things you need to send to the API */ })
})
    .then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error);

    return (
        <div>
            <Search />
            <h1>This is the Posts Page!</h1>
            <div>
                
            </div>
        


        </div>
    )
}


export default Posts;