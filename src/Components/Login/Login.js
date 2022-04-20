import React, { useState } from 'react';
import NavBar from '../Share/NavBar/NavBar';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGooglePlus, faFacebook } from '@fortawesome/free-brands-svg-icons'
import useAuth from "../../Hooks/useAuth"


const Login = () => {
    // all-state 
    const [newUser, setNewUser] = useState(false);
  
    // auth-context 
    const { user,
        setUser,
        googleSignIn,
        facebookSignIn,
        githubSignIn,
        createWithEmailAndPassword,
        signInEmailAndPassword } = useAuth();
    // Router-reDirect 
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // // Google-Sign-In 
    const handelGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                setUser(res);
                navigate(from, { replace: true })
            })
            .catch(err => {
                setUser(err);
            });
    };

    // // Facebook-Sign-In 
    const handelFacebookSignIn = () => {
        facebookSignIn()
            .then(res => {
                setUser(res);
                navigate(from, { replace: true })
            })
            .catch(err => {
                setUser(err);
            });
    };

    // // Github-Sign-In 
    const handelGithubSignIn = () => {
        githubSignIn()
            .then(res => {
                setUser(res);
                navigate(from, { replace: true })
            })
            .catch(err => {
                setUser(err);
            });

    };


    // handel email and password valid 
    const handelBlur = e => {
        let isFieldValid;

        if (e.target.name === 'name') {
            isFieldValid = e.target.value;
        }
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const passwordLength = e.target.value.length >= 6;
            const passwordValid = /\d{1}/.test(e.target.value);
            isFieldValid = passwordLength && passwordValid;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
    };

    // From-OnSubmit-Area 
    const handelSubmit = e => {
        e.preventDefault();

        if (newUser && user.name && user.email && user.password) {
            createWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    setUser(res);
                    navigate(from, { replace: true })
                })
                .catch(err => {
                    setUser(err);
                });
        };

        if (!newUser && user.email && user.password) {
            signInEmailAndPassword(user.email, user.password)
                .then(res => {
                    setUser(res);
                    navigate(from, { replace: true })
                })
                .catch(err => {
                    setUser(err);
                });
        };

    };



    return (
        <section className=' mb-5 pb-5'>
            <NavBar />

            {/* handel-error  */}
            <div className=" mt-3 text-center ">
                <h2 className="text-danger">{user.error}</h2>
                {
                    user.success && <h2 className="text-success">user {newUser ? 'Created' : 'LoggedIn'} successfully</h2>
                }
            </div>

            {/* SignUp-Form  */}
            { newUser ?
                <div className="row mt-5">
                    <div className="col-md-5 m-auto">
                        <div className=" p-3 border shadow-lg rounded-3">
                            <h4 className="text-primary text-center">Create an Account</h4>
                            <Form onSubmit={handelSubmit} >
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <label htmlFor="name">Name</label>
                                    <input onBlur={handelBlur} className="form-control" type="text" name="name" placeholder="Your Name" required />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <label htmlFor="email">Email Address</label>
                                    <input onBlur={handelBlur} className="form-control" type="email" name="email" placeholder="Your Email" required />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <label htmlFor="password">Password</label>
                                    <input onBlur={handelBlur} className="form-control" type="password" name="password" placeholder="Your Password" required />
                                </Form.Group>

                                <Form.Group className="mt-4" controlId="exampleForm.ControlTextarea1">
                                    <input className="btn btn-success border-0 rounded-3 form-control" type="submit" value="Create Account" />
                                </Form.Group>

                                <div className="mt-3 text-center">
                                    <p className="text-secondary">Already have an account?
                                    <Link onClick={() => setNewUser(false)} to="#" className="ms-2 text-success fs-5">Login</Link>
                                    </p>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div> :


                <div className="row mt-5">
                    <div className="col-md-5 m-auto">
                        <div className=" p-3 border shadow-lg rounded-3">
                            <h2 className="text-info text-center">Login</h2>
                            <Form onSubmit={handelSubmit}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <label htmlFor="Email Address"></label>
                                    <input onBlur={handelBlur} className="form-control" type="email" name="email" placeholder="Your Email" required />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <label htmlFor="Password"></label>
                                    <input onBlur={handelBlur} className="form-control" type="password" name="password" placeholder="Your Password" required />
                                </Form.Group>

                                <div className="d-flex justify-content-between align-content-center mt-4">
                                    <div>
                                        <p className="text-secondary">
                                            <Link onClick={() => setNewUser(true)} to="#" className="ms-2 text-primary fs-6">Create an account?</Link>
                                        </p>
                                    </div>
                                    <div>
                                        <small>
                                            <Link to="/" className="text-danger">Forgot Password</Link >
                                        </small>
                                    </div>
                                </div>

                                <Form.Group className="mt-4" controlId="exampleForm.ControlTextarea1">
                                    <input className="btn btn-success border-0 rounded-3 form-control" type="submit" value="Login" />
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </div>}

            {/* Continue-Section  */}
            <div className="mt-3 p-3">
                <div className="text-center">
                    <h4 className="text-warning">Or</h4>
                    <h3 className="text-info">Continue With</h3>
                </div>

                <div className="mt-3  d-flex justify-content-center align-content-center m-auto">
                    <FontAwesomeIcon onClick={handelGoogleSignIn} className="btn text-warning fs-3" icon={faGooglePlus} />

                    <FontAwesomeIcon onClick={handelFacebookSignIn} className="btn text-primary fs-3 ms-2" icon={faFacebook} />

                    <FontAwesomeIcon onClick={handelGithubSignIn} className="btn text-Secondary  fs-3 ms-2" icon={faGithub} />
                </div>
            </div>

        </section >
    );
};

export default Login;