import React, { useState, useEffect } from 'react';
import logo from '../../img/logo.png';
import search from '../../img/search-icon.png';
import basket from '../../img/basket-icon.png';
import './navbar.scss';

import useShopService from '../../services/useShopService';
import {setNav} from '../../utils/setContent';

const NavBar = () => {
    const {getCategories, process, setProcess} = useShopService();
    const [data, setData] = useState([]);
    
    const updateElement = () => {
        getCategories()
            .then(onDataLoaded)
            .then(() => setProcess('complete'))
    };

    const onDataLoaded = (newData) => {
        setData(newData);
    };

    useEffect(() => {
        updateElement();
        // eslint-disable-next-line
    }, []);

    const View = () => {
        return data.map((item, i) => 
        <li className='navbar__list__item'
            key={i}
            >
                {item}
        </li>)
    }

    return (
        <nav className='navbar'>
            <ul className='navbar__list'>
                <img className='icon' src={logo} alt="logo" />

                <div className='navbar__list__container'>
                    {setNav(process, View)}
                </div>
                <div>
                    <img className='search' src={search} alt="search-icon" />
                    <img className='icon' src={basket} alt="basket-icon" />
                </div>
            </ul>
        </nav>
    );
}

export default NavBar;
