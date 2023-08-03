import React from 'react';
import logo from '../../img/icons/logo.png';
import search from '../../img/icons/search-icon.png';
import basket from '../../img/icons/bag-icon.png';
import { Link, Outlet } from 'react-router-dom';
import './layout.scss';

export default function Layout() {
    return (
        <>
            <header>
                <nav className='navbar' role='navigation'>
                    <ul className='navbar__list'>
                            <Link to='/'><img className='icon' src={logo} alt="logo" /></Link>
                            <Link className='navbar__list__item' to='/electronics'>Electronics</Link>
                            <Link className='navbar__list__item' to='/jewelery'>Jewelery</Link>
                            <Link className='navbar__list__item' to='/mens-clothing'>Men's clothing</Link>
                            <Link className='navbar__list__item' to='/womens-clothing'>Women's clothing</Link>
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
