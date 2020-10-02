import React, { Component, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { DemoApp } from './AppDemo';

const NavigationBar = (props: { apps: DemoApp[] }) => {
    const navInactiveStyle: any = { "color": "white", "margin": "0 5px" };
    const navActiveStyle: any = { "color":"steelblue", "margin": "0 5px" };

    const [collapsed, setCollapsed] = useState(true);

    const demoLinks = props.apps.map(
        (app: DemoApp, idx: number) => {
            const path = idx == 0 ? "/" : `/${app.name.toLowerCase().replace(" ", "")}`
            return ( <NavLink exact to={path} style={navInactiveStyle} activeStyle={navActiveStyle}>
                    {app.name}
                </NavLink>);
        }
    );

    return (
        <header>
            <nav className="navbar-dark navbar-expand-sm navbar-toggleable-sm bg-dark ng-white border-bottom box-shadow mb-3">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src="images/logo.jpg" />&nbsp;React Demos</Link>
                    <button className="navbar-toggler" type="button" onClick={ () => setCollapsed(!collapsed) }
                            data-toggle="collapse" data-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" aria-expanded="false" 
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse d-sm-inline-flex flex-sm-row-reverse" id="navbarSupportedContent">
                        <ul className="navbar-nav flex-grow">
                            {demoLinks}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavigationBar;