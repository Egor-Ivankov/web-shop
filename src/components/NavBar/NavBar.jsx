import React from 'react';
import logo from '../../img/icons/logo.png';
import search from '../../img/icons/search-icon.png';
import basket from '../../img/icons/bag-icon.png';
import './navbar.scss';

const NavBar = () => {
    return (
        <nav className='navbar' role='navigation'>
            <ul className='navbar__list'>
                    <img className='icon' src={logo} alt="logo" />
                    <li className='navbar__list__item'>Electronics</li>
                    <li className='navbar__list__item'>Jewelery</li>
                    <li className='navbar__list__item'>Men's clothing</li>
                    <li className='navbar__list__item'>Women's clothing</li>
                <div>
                    <img className='icon' src={search} alt="search-icon" />
                    <img className='icon' src={basket} alt="basket-icon" />
                </div>
            </ul>
        </nav>
    );
}

export default NavBar;
