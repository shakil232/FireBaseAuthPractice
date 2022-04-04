import React from 'react';
import NavBar from '../Share/NavBar/NavBar';

const Header = () => {
    return (
        <section className=' container text-center text-info'>
            <NavBar/>
            <div className='mt-5'>
                <h3 className=' text-center text-info'>Header are Coming..</h3>
            </div>
        </section>
    );
};

export default Header;