import React, { useContext } from 'react';
import './NavBar.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import { getAuth, signOut } from "firebase/auth";

const NavBar = () => {
    const [user, setUser] = useContext(userContext);
    const auth = getAuth();

    // LogOut-Area 
    const handelLogOut = () => {
        signOut(auth)
            .then(res => {
                const signInUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    photoUrl: ''
                }
                setUser(signInUser);
            })
            .catch(err => {
                const newUserInfo = { ...user };
                newUserInfo.success = false;
                newUserInfo.error = err.message;
                setUser(newUserInfo)
            });
    }

    return (

        <Navbar className="nav-list" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className="me-5 nav-menu " to="/home">Home</Link>
                        <Link className="me-5 nav-menu " to="/about">About</Link>
                        <Link className="me-5 nav-menu " to="/contact">Contact</Link>
                        {
                            user.isSignedIn && <h4 className="text-warning fs-5">{user.name}</h4>
                        }
                        {
                            user.isSignedIn ? <Link onClick={handelLogOut} className=" btn btn-danger border-0 rounded-3 ms-5" to="/">LogOut</Link>

                                : <Link className=" btn btn-warning border-0 rounded-3" to="/login">Login</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;