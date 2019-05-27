import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <h1>API Calling</h1>
          <List></List>
        </Container>
      </div>
    );
  }
}

export default App;
