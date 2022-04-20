
import './NavBar.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link, NavLink } from 'react-router-dom';

import useAuth from "../../../Hooks/useAuth"


const NavBar = () => {

    const {user,logOut} = useAuth();


    return (

        <Navbar className="nav-list" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink  className="me-5 nav-menu " to="/home">Home</NavLink>
                        <NavLink  className="me-5 nav-menu " to="/review">OrderReview</NavLink>
                        <NavLink  className="me-5 nav-menu " to="/dashboard">Dashboard</NavLink>
                        {
                            user?.email && <h4 className="text-warning fs-5">{user.displayName}</h4>
                        }
                        {
                            user?.email ? <Link onClick={()=>logOut({})} className=" btn btn-danger border-0 rounded-3 ms-5" to="/">LogOut</Link>

                                : <Link className=" btn btn-warning border-0 rounded-3" to="/login">Login</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;