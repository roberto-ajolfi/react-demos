import React, { Component, ComponentType } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import App from './Apps/App';
import NoMatch from './NoMatch';

export interface DemoApp {
  name: string;
  component: ComponentType;
}

const demoApps: DemoApp[] = [
  { name: "Welcome", component: App},
];

const AppDemo = () => {
  const routes = demoApps.map( 
    (app: DemoApp, idx: number) => {
      const path = idx == 0 ? "/" : `/${app.name.toLowerCase().replace(" ", "")}`
      return( <Route path={path} exact component={app.component} /> );
    }
  );

  return (
    <>
    <BrowserRouter>
        <NavigationBar apps={demoApps} />
        <div className="container">
          <Switch>
            {routes}
            <Route component={NoMatch} />
          </Switch>
        </div>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default AppDemo;