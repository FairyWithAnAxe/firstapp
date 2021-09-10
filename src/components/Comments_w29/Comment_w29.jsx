import React from 'react'
import avatar from "./user-icon.png"

function Comment({ comment, index }) {
    return (
        <div className={index === 0 ? "comment comment__selected" : "comment"}>
            <div className="comment-image-container">
                <img src={avatar} alt="avatar" />
            </div>
            <div className="comment-right-part">
                <div className="comment-text">{comment}</div>
            </div>
        </div>
    )
}

export default Comment




