import React from 'react'

const Todo = ({ text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }
    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            {/* <button className="complete-btn">v</button> */}
            <button onClick={deleteHandler} className="trash-btn">del</button>
            {/* <button className="complete-btn"><i className="fas fa-chech"></i></button>
            <button className="trash-btn"><i className="fas fa-trash"></i></button> */}

        </div>
    )
}

export default Todo
