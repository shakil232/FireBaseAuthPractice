import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Share/NavBar/NavBar';

const OrderReview = () => {
    return (
        <section className=''>
            <NavBar />
            <div className='mt-5  container text-center text-info'>
                <h3 className=' text-center text-info'>This is Order-Review Page</h3>
                <Link to="/shipping" className="btn btn-success mt-5">Order Place</Link>
            </div>
        </section>
    );
};

export default OrderReview;