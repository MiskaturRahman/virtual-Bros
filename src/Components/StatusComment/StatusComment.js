import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const StatusComment = (props) => {
    console.log(props);
    const { id, postId, body, email } = props.comment;


    const commentStyle = {
        backgroundColor: "#00cc99",
        border: "1px solid gray",
        borderRadius: "3px",
        padding: "20px",
        margin: "20px",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
    }


    return (
        <div style={commentStyle}>
            <h3>Comment: {body}</h3>
            <h5>Comment by: {email}</h5>
            <p>postId: {postId}</p>
            <p><small>Id: {id}</small></p>
        </div>
    );
};

export default StatusComment;