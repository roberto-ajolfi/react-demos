import React, { Component, useState } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link, NavLink as RRNL } from 'react-router-dom';

const NavigationBar = () => {
    const navInactiveStyle: any = { "color": "white"};
    const navActiveStyle: any = { "color":"steelblue"};

    const [collapsed, setCollapsed] = useState(true);

    return (
        <header>
            <Navbar className="navbar-dark navbar-expand-sm navbar-toggleable-sm bg-dark ng-white border-bottom box-shadow mb-3" light>
                <Container>
                    <NavbarBrand tag={RRNL} to="/">
                        <img src="images/logo.jpg" />&nbsp;Help Desk System
                    </NavbarBrand>
                    <NavbarToggler onClick={ () => setCollapsed(!collapsed) } className="mr-2" />
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink exact tag={RRNL} to="/" style={navInactiveStyle} activeStyle={navActiveStyle}>
                                    <i className="fa fa-home"></i>&nbsp;Home
                                </NavLink>
                            </NavItem>
                                <NavItem>
                                <NavLink exact tag={RRNL} to="/ticketlist" style={navInactiveStyle} activeStyle={navActiveStyle}>
                                    <i className="fa fa-table"></i>&nbsp;Tickets List
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink exact tag={RRNL} to="/about" style={navInactiveStyle} activeStyle={navActiveStyle}>
                                    <i className="fa fa-info-circle"></i>&nbsp;About
                                </NavLink>
                            </NavItem>
                        </ul>
                    </Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default NavigationBar;