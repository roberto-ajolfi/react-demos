import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import StatefulComponent from './StatefulComponent';
import ItemsList from './ItemsList';
import Glossary from './Glossary';

class App extends Component<any, any> {
  items: string[] = [
    'Item 1',
    'Item 2',
    'Item 3'
  ];

  name: string = 'Roberto';

  handleClick = () => {
    alert('Hello from the callback');
  };

  handleMessage = (message: string) => {
    alert('Message is: ' + message);
  };

  terms: { term: string, description: string }[] = [
    { term:"term1", description:"desc1" },
    { term:'term2', description:'desc2' },
    { term:'term3', description:'desc3' },
  ];

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          {/* <FirstComponent></FirstComponent> */}
          {/* <SecondComponent></SecondComponent> */}
          {/* <ThirdComponent name={this.name} onClick={this.handleClick} onMessage={this.handleMessage}>
            <p>Questo è un figlio</p>
            <p style={{backgroundColor: 'red', color: 'white'}}>E questo è sua fratello</p>
          </ThirdComponent> */}
          <Glossary items={this.terms} />
          {/* <StatefulComponent></StatefulComponent> */}
          {/* <ItemsList items={this.items}></ItemsList> */}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
