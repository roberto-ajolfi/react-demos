import React from 'react';
import logo from './logo.svg';
import './App.css';

//import Toggle from './Components/Toggle/ToggleFunc';
//import CToggle from './Components/Toggle/ToggleClass';
import Toggle from './Components/Toggle/AnotherToggle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <Toggle onToggle={on => console.log("Toggle(F): " + on)}>
          <Toggle.On>The button is on</Toggle.On>
          <Toggle.Off>The button is off</Toggle.Off>
          <Toggle.Button />
        </Toggle> */}

        {/* <CToggle onToggle={on => console.log("Toggle(C): " + on)}>
          <CToggle.On>(C) The button is on</CToggle.On>
          <CToggle.Off>(C) The button is off</CToggle.Off>
          <CToggle.Button />
        </CToggle> */}

        {/* STEP 1 - Disegna il markup desiderato */}
        {/* <Toggle>
          <Toggle.On>Content when Toggle is ON</Toggle.On>
          <Toggle.Off>Content when Toggle is OFF</Toggle.Off>
          <Toggle.ToggleButton />
        </Toggle> */}

        {/* STEP 2 - Disegna le props che servono / desidero */}
        {/* <Toggle onToggle={ (state) => console.log("Toggling to: " + state) }>
          <Toggle.On isActive>Content when Toggle is ON</Toggle.On>
          <Toggle.Off isActive>Content when Toggle is OFF</Toggle.Off>
          <Toggle.ToggleButton onToggle={ () => { 
            // update common state ...
            // raise Toggle.onToggle() ...
          }} />
        </Toggle> */}

        {/* STEP 13 - Funziona! */}
        <Toggle onToggle={ (state) => console.log("Toggling to: " + state)}>
          <Toggle.On>
            <div style={{ border: "2px solid green", backgroundColor: "lightgreen", color: "darkgreen"}}>
              Content when Toggle is ON
            </div>
          </Toggle.On>
          <Toggle.Off>
            <div style={{ border: "2px solid red", backgroundColor: "darkred", color: "crimson"}}>
              Content when Toggle is OFF
            </div>
          </Toggle.Off>
          <Toggle.ToggleButton/>
        </Toggle>
      </header>
    </div>
  );
}

export default App;
