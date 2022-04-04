import React from 'react';
import NavBar from '../Share/NavBar/NavBar';
import { Form } from 'react-bootstrap';


const Login = () => {


    return (
        <section className=' container text-center text-info'>
            <NavBar />
            <div className="row mt-5">
                <div className="col-md-6 m-auto p-5 border border-1 border-info">
                    <h2 className="text-info">sign in</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <label htmlFor="Email Address"></label>
                            <input className="form-control" type="email" name="email" placeholder="Your Email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <label htmlFor="Password"></label>
                            <input className="form-control" type="email" name="password" placeholder="Your Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <input className="btn btn-success border-0 rounded-3" type="submit" value="Sign In"/>
                        </Form.Group>
                    </Form>
                </div>

            </div>
        </section >
    );
};

export default Login;