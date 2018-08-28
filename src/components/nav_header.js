import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import './style/nav_header.css';

class NavHeader extends Component {
    render() {
        return (
            <div>
            <Navbar inverse defaultNavExpanded>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/">TwitchViewer</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <LinkContainer to="/popular">
                        <NavItem>Popular</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/games">
                        <NavItem>Games</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/settings">
                        <NavItem>Settings</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            </div>
            

        );
    }
} 

export default NavHeader;