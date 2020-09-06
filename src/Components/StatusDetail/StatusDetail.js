import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';
import StatusComment from '../StatusComment/StatusComment';

const StatusDetail = () => {
    const { statusId } = useParams();
    const [status, setStatus] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${statusId}`)
            .then(response => response.json())
            .then(data => setStatus(data));
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${statusId}`)
            .then(response => response.json())
            .then(data => setComments(data));
        // .then(data => console.log(data))
        // console.log(comment);

    }, [])



    const style =
    {
        textAlign: 'center',
        backgroundColor: 'lightblue',
        width: '400px',
        marginLeft: '400px',
        padding: '30px',
        margintop: '20px',
        border: '1px solid lightgray',
        borderRadius: '5px',
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
    }





    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>

                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: 'auto' }}>
                    <div>
                        <div style={style}>
                            <h5>Post details of: {status.id}</h5>
                            <h3>Title: {status.title}</h3>
                            <p>{status.body}</p>
                        </div>
                        <div>
                            {
                                comments.map(comment => <StatusComment comment={comment}></StatusComment>)
                            }
                        </div>

                    </div>
                </Typography>


            </Container>
        </React.Fragment>
    );
};

export default StatusDetail;