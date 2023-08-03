import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

export default function Footer() {
    return (
        <div className='footer'>
            <ul className='footer-list'>
                <Link to='/electronics' className='footer-list-item'>Electronics</Link>
                <Link to='/jewelery' className='footer-list-item'>Jewelery</Link>
                <Link to='/mens-clothing' className='footer-list-item'>Men's clothing</Link>
                <Link to='/womens-clothing' className='footer-list-item'>Women's clothing</Link>
            </ul>
            <p className='footer-par'>© Web Shop Inc., 2023 y. All rights reserved.</p>
        </div>
    )
}
