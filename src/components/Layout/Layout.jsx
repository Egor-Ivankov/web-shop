import React from 'react';
import logo from '../../img/icons/logo.png';
import search from '../../img/icons/search-icon.png';
import basket from '../../img/icons/bag-icon.png';
import { Link, Outlet } from 'react-router-dom';
import './layout.scss';

export default function Layout() {

    const navElements = [
        {value: 'Electronics', identifier: '/electronics', id: 1},
        {value: 'Jewelery', identifier: '/jewelery', id: 2},
        {value: 'Men\'s clothing', identifier: '/mens-clothing', id: 3},
        {value: 'Women\'s clothing', identifier: '/womens-clothing', id: 4},
    ];

    return (
        <>
            <header>
                <nav className='navbar' role='navigation'>
                    <ul className='navbar__list'>
                        <Link to='/'><img className='icon' src={logo} alt="logo" /></Link>
                        {navElements.map(item =>    <Link 
                                                        className='navbar__list__item' 
                                                        to={item.identifier}
                                                        key={item.id}>
                                                            {item.value}
                                                    </Link>
                                        )
                        }
                        <div>
                            <img className='icon' src={search} alt="search-icon" />
                            <img className='icon' src={basket} alt="basket-icon" />
                        </div>
                    </ul>
                </nav>
            </header>
            <Outlet/>
        </>
    )
}
