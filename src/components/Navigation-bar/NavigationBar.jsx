import React from 'react';
import logo from '../../img/icons/logo.png';
import basket from '../../img/icons/bag-icon.png';
import heart from '../../img/icons/heart-navBar-icon.png';
import { Link, Outlet } from 'react-router-dom';
import './navigation-bar.scss';

export default function NavigationBar() {

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
                            <Link to="liked-list"><img className='icon' src={heart} alt="heart-icon" /></Link>
                            <Link to="shopping-cart"><img className='icon' src={basket} alt="basket-icon" /></Link>
                        </div>
                    </ul>
                </nav>
            </header>
            <Outlet/>
        </>
    )
}
