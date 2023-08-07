import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

export default function Footer() {

    const footerElements = [
        {value: 'Electronics', identifier: '/electronics', id: 1},
        {value: 'Jewelery', identifier: '/jewelery', id: 2},
        {value: 'Men\'s clothing', identifier: '/mens-clothing', id: 3},
        {value: 'Women\'s clothing', identifier: '/womens-clothing', id: 4},
    ];

    return (
        <div className='footer'>
            <ul className='footer-list'>
                {footerElements.map(item =>    <Link 
                                                className='footer-list-item' 
                                                to={item.identifier}
                                                key={item.id}>
                                                    {item.value}
                                            </Link>
                                        )
                }
            </ul>
            <p className='footer-par'>© Web Shop Inc., 2023 y. All rights reserved.</p>
        </div>
    )
}
