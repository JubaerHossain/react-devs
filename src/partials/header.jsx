import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../_helpers';
function HeaderPage() {
    const {authentication} = useSelector(state => state);
    function goTo(data) {
        history.push(data);
    }
    return (
           <div className="col-lg-8 offset-lg-2">
            <Navbar   bg="dark" variant="dark">
            <Navbar href="#"><Link to="/" onClick={() => goTo(`/`)}>Home</Link></Navbar>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    {authentication.loggedIn && 
                <Nav ><Button onClick={() => goTo(`/login`)} >Logout</Button></Nav>}
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            </div>
    );
}
export { HeaderPage };