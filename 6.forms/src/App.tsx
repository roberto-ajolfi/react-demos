import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import UncontrolledForm from './UncontrolledForm';
import ValidateForm from './ValidateForm';
import SimpleValidationForm from './SimpleValidationForm';
import WebApiForm from './WebApiForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <Form></Form> */}
          {/* <UncontrolledForm></UncontrolledForm> */}
          {/* <ValidateForm></ValidateForm> */}
          {/* <SimpleValidationForm></SimpleValidationForm> */}
          <WebApiForm></WebApiForm>
        </header>
      </div>
    );
  }
}

export default App;
