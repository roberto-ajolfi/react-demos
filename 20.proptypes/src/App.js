import React from 'react';
import './App.css';
import PizzaCard from './PizzaCard';
import Renderable from './Renderable';

function App() {
  return (
    <div className="App">
        <PizzaCard 
          name={12}
          description="Delicious super roman pizza." 
          price={10}
          toppings={["tomato", "mozarella", "onions"]}
          discount={false}
        />
        <Renderable>
          <h1>First Child</h1>
          {/* <h2>Second Child</h2> */}
        </Renderable>
    </div>
  );
}

export default App;
