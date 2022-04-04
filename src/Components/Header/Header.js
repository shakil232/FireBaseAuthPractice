import React from 'react';
import NavBar from '../Share/NavBar/NavBar';

const Header = () => {
    return (
        <section>
            <NavBar/>
            <div className='mt-5 text-center'>
                <h2 className='text-info'>welCome Fire-Auth Project</h2>
                <h4 className="mt-3 text-danger">This Project only User Login and Logout Method Displaying.. </h4>
            </div>
        </section>
    );
};

export default Header;