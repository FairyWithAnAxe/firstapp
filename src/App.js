import './App.css';
import Card from './components/Card';
import './components/Card.css';

  const cardsJSON = `[{
    "title": "300",
    "price":"300",
    "description": "10"
  }, {
    "title": "450",
    "price":"450",
    "description": "50"
  }, {
    "title": "550",
    "price":"550",
    "description": "100",
    "isSelected": "true"
  }, {
    "title": "1000",
    "price":"1000",
    "description": "200"
  }  ]`;

  const cards = JSON.parse(cardsJSON);

function App() {
  return (
    <div className="cards">
      
      {cards.map((card)=>
      <Card title={card.title} price={card.price} description={card.description} isSelected={card.isSelected}/>
      )}
      
    </div>
  );
}

export default App;
