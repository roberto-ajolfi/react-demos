import React from 'react';
import './App.css';

import Page from './Page';

import withHeaderAndFooter from './HOCwithHeaderAndFooter';
import withThings, { ThingsProps } from './HOCwithThings';
import withThingsH from './HOCwithThingsHooks';
import withThingsGetter from './HOCwithThingsGetter';
import { getStuffs } from './Service';

// interface Lengthwise {
//   length: number;
// }

// function loggingIdentity<T extends Lengthwise>(arg: T) {
//   console.log(arg.length);  // Now we know it has a .length property, so no more error
//   return arg;
// }

// console.log(loggingIdentity(3));

//const HelloWorld = () => <div>Hello, World!</div>;

// NON FUNZIONA : manca l'implementazione di ThingsProps
// class HelloWorld extends React.Component<{}, {}>
// { 
//   render() {
//     return (<div>Hello, World!</div>);
//   }
// }

// FUNZIONA
class HelloWorld extends React.Component<ThingsProps, {}>
{
  render() {
  return (<div>Hello, World! {this.props.things.length}</div>);
  }
}

// interface pippo { name: string; }
// // NON FUNZIONA : interfaccia non compatibile
// const HelloWorld = (props: pippo) => <div>Hello, World!</div>;


const HelloWorldStartFull = (props: ThingsProps) => {
  return(
  <div>
    <h3>Hello, World!</h3>
    <ul>
      {props.things.map(thing => (
        <li key={thing}>{thing}</li>
      ))}
    </ul>
  </div>
  );
};

const HelloWorldPage = withHeaderAndFooter(HelloWorld);
const HelloWorldWithThings = withThings(HelloWorldStartFull);
const HelloWorldFull = withHeaderAndFooter(withThingsH(HelloWorldStartFull));
const HelloWorldFullWithGetter = withHeaderAndFooter(withThingsGetter(HelloWorldStartFull, getStuffs));

function App() {
  return (
    // <Page />
    // <HelloWorld />
    // <HelloWorldPage />
    <HelloWorldWithThings />
    // <HelloWorldFull />
    // <HelloWorldFullWithGetter />
  );
}

export default App;
