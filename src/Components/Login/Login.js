import React from 'react';
import NavBar from '../Share/NavBar/NavBar';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGooglePlus, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Login = () => {


    return (
        <section className=' mb-5 pb-5'>
            <NavBar />
            <div className="row mt-5">
                <div className="col-md-5 m-auto">
                    <div className=" p-3 border shadow-lg rounded-3">
                        <h4 className="text-primary text-center">Create an Account</h4>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <label htmlFor="Name"></label>
                                <input className="form-control" type="text" name="name" placeholder="Your Name" required />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlInput1">
                                <label htmlFor="Email Address"></label>
                                <input className="form-control" type="email" name="email" placeholder="Your Email" required />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <label htmlFor="Password"></label>
                                <input className="form-control" type="email" name="password" placeholder="Your Password" required />
                            </Form.Group>

                            <Form.Group className="mt-4" controlId="exampleForm.ControlTextarea1">
                                <input className="btn btn-success border-0 rounded-3 form-control" type="submit" value="Create Account" />
                            </Form.Group>

                            <div className="mt-3 text-center">
                                <p className="text-secondary">Already have an account?
                                    <Link to="/" className="ms-2 text-info">Login</Link>
                                </p>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
            {/* <div className="row mt-5">
                <div className="col-md-6 m-auto">
                    <div className=" p-5 border shadow-lg">
                        <h2 className="text-info text-center">Login</h2>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <label htmlFor="Email Address"></label>
                                <input className="form-control" type="email" name="email" placeholder="Your Email" required />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <label htmlFor="Password"></label>
                                <input className="form-control" type="email" name="password" placeholder="Your Password" required />
                            </Form.Group>

                            <div className="d-flex justify-content-between align-content-center mt-3">
                                <div>
                                    <input type="checkbox" name="Remember me" />
                                    <label htmlFor="Remember me" className="text-primary ms-2">Remember me</label>
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
            </div> */}

            {/* Continue-Section  */}
            <div className="mt-3 p-3">
                <div className="text-center">
                    <h4 className="text-warning">Or</h4>
                    <h3 className="text-info">Continue With</h3>
                </div>

                <div className="mt-3  d-flex justify-content-center align-content-center m-auto">
                    <FontAwesomeIcon className="btn text-warning fs-3" icon={faGooglePlus} />
                    <FontAwesomeIcon className="btn text-primary fs-3 ms-2" icon={faFacebook} />
                    <FontAwesomeIcon className="btn text-Secondary  fs-3 ms-2" icon={faGithub} />
                </div>
            </div>

        </section >
    );
};

export default Login;