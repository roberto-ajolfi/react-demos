import React from 'react';
import './App.css';
import Toggle from './ToggleRPC';
import Hover from './Hover';
import Info from './Info';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">  
        <p>
          Welcome to React!
        </p>
        
      </header>
      <div style={{backgroundColor: "white"}}>
        {/* <Toggle /> */}

        {/* <Toggle>
          <h1>Hello everyone!</h1>
        </Toggle> */}

        {/* <Toggle render={(message) => (
          // la prop è una funzione che restituisce il JSX da mostrare
          <div>
            <h1>Show me (Second render prop)</h1>
            <h2>{message}</h1>
            <button>Show / Hide</button>
          </div>
        )} />  */}  
          
        {/* <Toggle render={({ on, toggle }) => (
          // la prop è una funzione che restituisce il JSX da mostrare
          <div>
            {on && <h1>Show me (Third render prop)</h1>}
            <button onClick={toggle}>Show / Hide</button>
          </div>
        )} />  */}

        <Toggle>
          {( p: {on:boolean; toggle:()=>void} ) => (
            // la prop è una funzione che restituisce il JSX da mostrare
            <>
              {p.on && <h1>Show me (Fourth render prop)</h1>}
              {/* <h2>{message}</h2> */}
              <button onClick={p.toggle}>Show / Hide</button>
            </>
          )}
        </Toggle>

        <Hover>
            {(hovering: boolean) => (
              <Info hover={hovering} />
            )}
        </Hover>
      </div>
    </div>
  );
}

export default App;
