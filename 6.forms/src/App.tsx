import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import UncontrolledForm from './UncontrolledForm';
import ValidateForm from './ValidateForm';
import SimpleValidationForm from './SimpleValidationForm';
import WebApiForm from './WebApiForm'

class App extends Component {
  render() {
    return (
      <div>
        <Form></Form>
        {/* <UncontrolledForm></UncontrolledForm> */}
        {/* <ValidateForm></ValidateForm> */}
        {/* <SimpleValidationForm></SimpleValidationForm> */}
        {/* <WebApiForm></WebApiForm> */}
      </div>
    );
  }
}

export default App;
