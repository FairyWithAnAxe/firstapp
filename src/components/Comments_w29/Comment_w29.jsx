// import React from 'react'
// import avatar from "./user-icon.png"

// function Comment({ comment, replies }) {
//     return (
//         <div className="comment">
//             <div className="comment-image-container">
//                 <img src={avatar} alt="avatar" />
//             </div>
//             <div className="comment-right-part">
//                 <div className="comment-content">
//                     <div className="comment-author">{comment.username}</div>
//                     <div>{comment.createdAt}</div>
//                 </div>
//                 <div className="comment-text">{comment.body}</div>
//                 {replies.length > 0 && (
//                     <div className="replies">
//                         {replies.map(reply => (
//                             <Comment comment={reply} key={reply.id} replies={[]} />
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default Comment