import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../Share/NavBar/NavBar';

const Header = () => {
    return (
        <section>
            <NavBar/>
            <div className='mt-5 text-center'>
                <h2 className='text-info'>welCome FireBase-Auth, React Router Dom and Private-Route Project</h2>
                <Link to="/review"  className="mt-5 btn btn-danger"> Click To Bay </Link>
            </div>
        </section>
    );
};

export default Header;