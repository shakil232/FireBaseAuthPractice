import React, { useContext } from 'react';
import './NavBar.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';

const NavBar = () => {
    const [ user, setUser ] = useContext(userContext);
    return (

        <Navbar className="nav-list" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className="me-5 nav-menu " to="/header">Home</Link>
                        <Link className="me-5 nav-menu " to="/about">About</Link>
                        <Link className="me-5 nav-menu " to="/contact">Contact</Link>   
                        {
                            user.isSignedIn ? <h4 className="text-warning fs-5">{user.name}</h4>
                            : <Link className=" btn btn-warning border-0 rounded-3 login-btn" to="/login">Login</Link>  
                        } 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;