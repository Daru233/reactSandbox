import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

const GetRequest = () => {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)


    useEffect(() => { 
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(response => {
                console.log(response)
                setPost(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    return (
        <div className="request-container">
            <h1>get request</h1>
            <input type="text" value={id} onChange={event => setId(event.target.value)} />
            <button type="button" onClick={handleClick}>Fetch a Post</button>
            <h5>{post.title}</h5>
            
            {/* <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default GetRequest;

