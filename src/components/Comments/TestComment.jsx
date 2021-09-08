import React from 'react'
import { useState } from 'react'

function TestComment() {
    const [pressed, setPressed] = useState(false);
    const handleChange = () => {
        setPressed(!pressed);
    }

    const [comment, addComment] = useState({ author: '', commentBody: '' })
    const sendComment = () => {
        localStorage.setItem('comments', JSON.stringify(comment))
    }
    return (
        <form>
            <input type="text"
                value={comment.author}
                onChange={e => addComment({ ...comment, author: e.target.value })}
            />
            <textarea type="textarea"
                value={comment.commentBody}
                onChange={e => addComment({ ...comment, commentBody: e.target.value })}
            />
            <button onClick={() => { handleChange(); sendComment(); }}>{pressed ? "Sending..." : "Send"}</button>
            <h2>Author of comment is - {comment.author}</h2>
            <h2>Comment is - {comment.commentBody}</h2>
            <h2>{JSON.stringify(comment)}</h2>
        </form>
    )
}

export default TestComment