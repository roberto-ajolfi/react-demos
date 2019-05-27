import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LifecycleComponent from './LifecycleComponent';

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = { userName: 'Roberto' };

    this.toggleUserName = this.toggleUserName.bind(this);
  }

  toggleUserName() {
    const newValue = this.state.userName == 'Roberto' ? 'Alessandro' : 'Roberto';
        this.setState((prevState: any) => {
            return {userName: newValue };
        });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <LifecycleComponent name={this.state.userName}></LifecycleComponent>
          <button onClick={this.toggleUserName}>Switch User</button>
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
