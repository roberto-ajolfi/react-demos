import React from 'react';
import getThings from './Service';

export default class Page extends React.Component {
    state = { things: [] as string[] };
    async componentDidMount() {
      const things = await getThings();
      this.setState({ things });
    }
    render() {
      return (
        <>
          <header className="App-header">
            === HEADER ===
          </header>
          <div className="App-body">
            <ul>
              {this.state.things.map(thing => (
                <li key={thing}>{thing}</li>
              ))}
            </ul>
          </div>
          <footer className="App-footer">
            --- FOOTER ---
          </footer>
        </>);
    }
  }