import React from 'react';
import './footer.scss';

export default function Footer() {
    return (
        <div className='footer'>
            <ul className='footer-list'>
                <li className='footer-list-item'>Electronics</li>
                <li className='footer-list-item'>Jewelery</li>
                <li className='footer-list-item'>Men's clothing</li>
                <li className='footer-list-item'>Women's clothing</li>
            </ul>
            <p className='footer-par'>© Web Shop Inc., 2023 y. All rights reserved.</p>
        </div>
    )
}
