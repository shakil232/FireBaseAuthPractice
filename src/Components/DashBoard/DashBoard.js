import React from 'react';
import NavBar from '../Share/NavBar/NavBar';

const DashBoard = () => {
    return (
        <section >
            <NavBar />
            <div className='mt-5  container text-center text-info'>
                <h3 className=' text-center text-info'>This is DashBoard Page</h3>
            </div>
        </section>
    );
};

export default DashBoard;