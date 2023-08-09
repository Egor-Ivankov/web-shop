import React from 'react';
import like from '../../img/icons/heart-icon.png';
import buy from '../../img/animations/buy.gif';
import './shopping-list-item-btns.scss';

export default function ShoppingListItemBtns() {
    return (
        <div className='btns'>
            <img src={like} alt="like-icon" />
            <img src={buy} alt="buy-icon" />
        </div>
    )
}
