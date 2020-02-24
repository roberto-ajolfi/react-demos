import React from 'react';
import './App.css';

import NonLazyComponent from './NonLazyComponent';
// import ErrorBoundary from './ErrroBoundary';

import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

// const ComponentA = React.lazy(() => import("./ComponentA"));
// const ComponentB = React.lazy(() => import("./ComponentB"));

// File Modificati
//
// - tsconfig.json (importHelper)
//

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NonLazyComponent></NonLazyComponent>

        <ComponentA></ComponentA>
        <ComponentB></ComponentB>

        {/* <ErrorBoundary>
          <React.Suspense fallback={<div>Loading...</div>}>
            <ComponentA></ComponentA>
            <ComponentB></ComponentB>
          </React.Suspense> 
        </ErrorBoundary> */}
      </header>
    </div>
  );
}

export default App;
