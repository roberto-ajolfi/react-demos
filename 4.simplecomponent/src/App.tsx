import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import StatefulComponent from './StatefulComponent';
import ItemsList from './ItemsList';

class App extends Component<any, any> {
  items: string[] = [
    'Item 1',
    'Item 2',
    'Item 3'
  ];

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          {/* <FirstComponent></FirstComponent>
          <SecondComponent></SecondComponent>
          <StatefulComponent></StatefulComponent> */}
          <ItemsList items={this.items}></ItemsList>
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
