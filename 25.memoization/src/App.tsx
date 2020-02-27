import React, { useState } from 'react';
import './App.css';

import LongOp from './components/LongOp';
import LongOpMemo from './components/LongOpMemo';
import LongOpWrapped from './components/LongOpWrapped';
import LongOpPure from './components/LongOpPure';

import { longOp, longOpMemo } from './longOp'
import measureTime from './support';
import memoize from './memoize';

// 1 - Prova a realizzare il fattoriale come da pagina Wikipedia https://en.wikipedia.org/wiki/Memoization
// 2 - Esempio di React.PureFunction
// 3 - Esempio di React.Memo



function App() {
  //const [inputVal, setInputVal] = useState('');
  const [nbr, setNbr] = useState(0);
  var inputVal = '';
  const [longOpMemoResult, setLongOpMemoResult] = useState(0);
  const [longOpMemoResultDuration, setLongOpMemoResultDuration] = useState(0);

  const handleChange = (e: any) => {
    //setInputVal(e.target.value);
    inputVal = e.target.value; 
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setNbr(Number(inputVal));

    // const [resultM, durationM] = measureTime(longOpMemo, nbr);
    // setLongOpMemoResult(resultM);
    // setLongOpMemoResultDuration(durationM);
  };

  return (
    <div className="App">
      <header className="App-header">
        Number of Runs:&nbsp;<input type="text" value={inputVal} onChange={handleChange}/><br />
        <button onClick={handleSubmit}>Test!</button>

        {/* <LongOp value={nbr} />
        
        <LongOpMemo value={nbr} />
        
        <LongOpWrapped value={nbr} />

        { 
        nbr !== 0 ?
          <div>longOpMemo in App:&nbsp;{longOpMemoResult}&nbsp;({longOpMemoResultDuration} ms)</div> :
          <div>Wait for a value ...</div> 
        } */}

        <LongOpPure input={nbr} />
        
      </header>
    </div>
  );
}

export default App;
