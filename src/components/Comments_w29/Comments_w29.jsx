import React, { useEffect, useState } from 'react'
import CommentForm_w29 from './CommentForm_w29'

function Comments_w29() {
    const [comments, setComments] = useState([])

    const addComment = (text) => {
        setComments([text, ...comments])
    }

    return (
        <div className="comments">
            <h3 className="comments-title">Comments</h3>
            <div className="comment-form-title">Write comment</div>

            <CommentForm_w29 handleSubmit={addComment} />
            {/* <textarea className="comment-form-textarea"></textarea>
            <button className="comment-form-button">Write</button> */}

            <div className="comments-container">
                All Comments
                {/* {rootComments.map((rootComment) => (
                    // <div key={rootComment.id}>{rootComment.body}</div>
                    <Comment key={rootComment.id} comment={rootComment} replies={getReplies(rootComment.id)} />
                ))} */}

            </div>
        </div>
    )
}

export default Comments_w29





// import React, { useEffect, useState } from 'react'
// import CommentForm from './CommentForm'
// import { getComments as getCommentsApi, createComment as createCommentsApi } from './api'
// import './Comments.css'
// import Comment from './Comment'

// function Comments({ currentUserId }) {
//     const [backendComments, setBackendComments] = useState([])
//     //console.log("backendComments", backendComments);

//     const rootComments = backendComments.filter((backendComment) => backendComment.parentId === null);

//     const getReplies = (commentId) => { return backendComments.filter((backendComment) => backendComment.parentId === commentId).sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()) }

//     const addComment = (text, parentId) => {
//         console.log("addComment", text, parentId);
//         createCommentsApi(text, parentId).then(comment => {
//             setBackendComments([comment, ...backendComments])
//         })
//     }

//     useEffect(() => {
//         getCommentsApi().then(data => {
//             setBackendComments(data);
//         })
//     }, [])
//     return (
//         <div className="comments">
//             <h3 className="comments-title">Comments</h3>
//             <div className="comment-form-title">Write comment</div>
//             <CommentForm submitLabel="Write" handleSubmit={addComment} />
//             <div className="comments-container">
//                 {rootComments.map((rootComment) => (
//                     // <div key={rootComment.id}>{rootComment.body}</div>
//                     <Comment key={rootComment.id} comment={rootComment} replies={getReplies(rootComment.id)} />
//                 ))}
//             </div>
//         </div>
//         // <div>
//         //     Comments
//         //     <CommentForm />
//         // </div>
//     )
// }

// export default Comments
