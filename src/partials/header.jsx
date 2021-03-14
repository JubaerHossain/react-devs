import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar,NavDropdown } from 'react-bootstrap'

function HeaderPage() {
    return (
           <div className="col-lg-8 offset-lg-2">
            <Navbar   bg="dark" variant="dark">
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                <Nav ><Link to="/login">Logout</Link></Nav>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            </div>
    );
}
export { HeaderPage };