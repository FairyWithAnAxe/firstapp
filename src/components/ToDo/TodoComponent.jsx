import { useEffect, useState } from 'react';
import Form from './Form';
import ToDoList from './ToDoList';



const TodoComponent = () => {

    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getLocalTodos()
    }, [])

    useEffect(() => {
        saveLocalTodos()
    }, [todos])

    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    const getLocalTodos = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]))
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'))
            setTodos(todoLocal)
        }
    }


    return (
        <div>
            <header>
                <h1>To Do List</h1>
            </header>

            <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
            <ToDoList todos={todos} setTodos={setTodos} />
        </div>
    )
}

export default TodoComponent
