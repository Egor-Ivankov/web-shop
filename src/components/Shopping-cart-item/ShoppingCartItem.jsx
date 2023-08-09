import React from 'react';
import test from '../../img/i.webp';
import cross from '../../img/icons/cross-icon.png';
import './shoppingCartItem.scss';

export default function ShoppingCartItem() {
    return (
        <div className="shopping-cart-container">
            <ul>
                <li>
                    <div className='shopping-cart-container-item'>
                        <img src={test} alt="test" className='shopping-cart-container-item-img'/>
                        <p>Заголовок товара 1</p>
                        <span>Кол-во:</span>
                        <input type="number"/>
                        <p>9999$</p>
                        <button><img src={cross} alt="cross" /></button>
                    </div>
                </li>
                
            </ul>
        </div>
    )
}
