import React from 'react';
import basket from '../img/basket-icon.png';
import './navbar.scss';


const NavBar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar__list'>
                <div className='navbar__list__container'>
                    <li className='navbar__list__item'>Main page</li>
                    <li className='navbar__list__item'>Shop </li>
                    <li className='navbar__list__item'>Support</li>
                </div>
                <img className='basket' src={basket} alt="basket-icon" />
            </ul>
        </nav>
    );
}

export default NavBar;
