import React, { useEffect, useState } from 'react'
import CommentForm from './CommentForm'
import { getComments as getCommentsApi, createComment as createCommentsApi } from './api'
import './Comments.css'
import Comment from './Comment'

function Comments({ currentUserId }) {
    const [backendComments, setBackendComments] = useState([])
    console.log("backendComments", backendComments);

    const rootComments = backendComments.filter((backendComment) => backendComment.parentId === null);

    const getReplies = (commentId) => { return backendComments.filter((backendComment) => backendComment.parentId === commentId).sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()) }

    const addComment = (text, parentId) => {
        console.log("addComment", text, parentId);
        createCommentsApi(text, parentId).then(comment => {
            setBackendComments([comment, ...backendComments])
        })
    }

    useEffect(() => {
        getCommentsApi().then(data => {
            setBackendComments(data);
        })
    }, [])
    return (
        <div className="comments">
            <h3 className="comments-title">Comments</h3>
            <div className="comment-form-title">Write comment</div>
            <CommentForm submitLabel="Write" handleSubmit={addComment} />
            <div className="comments-container">
                {rootComments.map((rootComment) => (
                    // <div key={rootComment.id}>{rootComment.body}</div>
                    <Comment key={rootComment.id} comment={rootComment} replies={getReplies(rootComment.id)} />
                ))}
            </div>
        </div>
        // <div>
        //     Comments
        //     <CommentForm />
        // </div>
    )
}

export default Comments
