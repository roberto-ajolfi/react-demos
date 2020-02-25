import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import NonLazyComponent from './NonLazyComponent';
// import ErrorBoundary from './ErrroBoundary';

// import ComponentA from './ComponentA';
// import ComponentB from './ComponentB';

const ComponentA = React.lazy(() => import("./ComponentA"));
const ComponentB = React.lazy(() => import("./ComponentB"));
// const Admin = React.lazy(() => import("./Admin/Admin"));

// File Modificati
//
// - tsconfig.json (importHelper)
//

function AppRoute() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ErrorBoundary> */}
          <BrowserRouter>
            <NonLazyComponent />
            <Link to="/">Home</Link><Link to="/compB">Component B</Link>
            {/* <Link to="/admin">Admin</Link> */}
            <React.Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/" component={ComponentA}/>
                <Route path="/compB" component={ComponentB}/>
                {/* <Route path="/admin" component={Admin}/> */}
              </Switch>
            </React.Suspense>
          </BrowserRouter>
        {/* </ErrorBoundary> */}
      </header>
    </div>
  );
}

export default AppRoute;