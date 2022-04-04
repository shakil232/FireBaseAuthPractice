import React from 'react';
import NavBar from '../Share/NavBar/NavBar';

const NotFound = () => {
    return (
        <section className=' container text-center text-info'>
            <NavBar/>
            <div className='mt-5'>
                <h3 className=' text-center text-info'>Sorry Not-Found....</h3>
            </div>
        </section>
    );
};

export default NotFound;