import React from 'react';
import logo from './logo.svg';
import './App.css';

import MyNotification from './MyNotification';

class App extends React.Component {
  state = { msg: 'This is a Notification', message: '' };

  handleClick = (e:any) => {
    e.preventDefault(); 
    this.setState((prevstate: any) => { return { message: this.state.msg}; });
  }

  handleChange = (e: any) => {
    this.setState({ msg: e.target.value });
  };

  closeNotification = () => { 
    this.setState((prevstate: any) => { return { message: ''}; });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
          <input type="text" value={this.state.msg} onChange={this.handleChange}/>
           <MyNotification message={this.state.message} onClose={this.closeNotification} />
          <button onClick={this.handleClick}>Send Notification</button>
        </header>
      </div>
    );
  }
}

export default App;
