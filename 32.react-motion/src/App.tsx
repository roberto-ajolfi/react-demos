import React, { CSSProperties, useState } from 'react';
import './App.css';
import { Motion, spring } from 'react-motion';

function App() {
  const containerStyle: CSSProperties = { position: 'absolute', backgroundColor: 'navy', left: 0, padding: '10px', border: "2px solid red" };
  const boxStyle: CSSProperties = { border: "2px solid red", backgroundColor: 'darkred', marginBottom: '10px', padding: '0 25px'};
  const buttonStyle: CSSProperties = { width: "300px", height: "150px", border: "4px double darkgreen", backgroundColor: "green", color: "white" };
  const disabledButtonStyle: CSSProperties = { width: "300px", height: "150px", border: "4px double black", backgroundColor: "darkgray", color: "gray" };
  const xButtonStyle: CSSProperties = { width: "330px", height: "20px", textAlign:'right', marginBottom: '5px' };

  const [showPanel, setshowPanel] = useState(false);

  const toggleShowPanel = () => setshowPanel(!showPanel);

  return (
    <div className="App">
      <header className="App-header">
        <Motion 
            defaultStyle={{ x: -200, opacity: 0 }} 
            style={{ x: spring( showPanel ? 0: -200, { stiffness: 170, damping: 10 }), opacity: spring(showPanel? 1 : 0) }}
        >
          { (animatedStyle) => (
            <div style={{ ...containerStyle, opacity: animatedStyle.opacity, transform: `translateX(${animatedStyle.x}px)` }}>
              <div style={boxStyle}>First<br/>Element</div>
              <div style={boxStyle}>Second<br/>Element</div>
              <div style={boxStyle}>Third<br/>Element</div>
              <div style={boxStyle}>Fourth<br/>Element</div>
              <button style={xButtonStyle} onClick={toggleShowPanel}>CLOSE</button>
            </div>
          )}
        </Motion>
        <button style={showPanel ? disabledButtonStyle: buttonStyle} onClick={toggleShowPanel} disabled={showPanel}>Show</button>
      </header>
    </div>
  );
}

export default App;
