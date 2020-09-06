import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Status from '../Status/Status';
import { Grid } from '@material-ui/core';
import Raw from '../Raw/Raw';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, [])



    return (
        <div >
            <h2 style={{ textAlign: 'center' }}>Post Timeline</h2>
            {/* <h3>post length:{posts.length}</h3> */}

            <div>
                {
                    posts.map(post => <Status post={post}></Status>)
                }
            </div>
        </div>
    );
};

export default Home;