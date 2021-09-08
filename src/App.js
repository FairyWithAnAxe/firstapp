import { useState } from 'react';
import './App.css';
import Card from './components/Card';
//import './components/Card.css';
import Comments from './components/Comments/Comments';
import TestComment from './components/Comments/TestComment';
import Comments_w29 from './components/Comments_w29/Comments_w29';
import Timer from './components/Timer';
import Form from './components/ToDo/Form';
import ToDoList from './components/ToDo/ToDoList';

  const cardsJSON = `[{
    "title": "300",
    "price":"300",
    "description": "10",
    "color": "blue",
    "isSelected": false
  }, {
    "title": "450",
    "price":"450",
    "description": "50",
    "color": "green",
    "isSelected": false
  }, {
    "title": "550",
    "price":"550",
    "description": "100",
    "color": "red",
    "isSelected": true
  }, {
    "title": "1000",
    "price":"1000",
    "description": "200",
    "color": "grey",
    "isSelected": false
  }  ]`;

  const cards = JSON.parse(cardsJSON);

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (

        <div>
          <header>
            <h1>To Do List</h1>
          </header>
          
          <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
          <ToDoList/>
        </div>









    // <div className="cards">
      
    //   {/* {cards.map((card)=>
    //   <Card title={card.title} price={card.price} description={card.description} color={card.color} isSelected={card.isSelected}/>
    //   )} */}

    //   {/* <div><Timer/></div> */}
    //   <div>
    //     {/* <TestComment/> */}
    //     {/* <Comments currentUserId="1"/> */}
    //     {/* <Comments_w29/> */}
    //   </div>
      
    // </div>
  );
}

export default App;
