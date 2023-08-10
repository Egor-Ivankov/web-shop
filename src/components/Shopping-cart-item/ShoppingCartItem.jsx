import React from 'react';
import cross from '../../img/icons/cross-icon.png';
import './shoppingCartItem.scss';

export default function ShoppingCartItem({item}) {
    return (
        <div className="shopping-cart-container">
            <ul>
                <li>
                    <div className='shopping-cart-container-item'>
                        <img src={item.image} alt="test" className='shopping-cart-container-item-img'/>
                        <p className='description'>{item.title}</p>
                        <span>Кол-во: </span>
                        <input type="number"/>
                        <p>{item.price} $</p>
                        <button><img src={cross} alt="cross" /></button>
                    </div>
                </li>
                
            </ul>
        </div>
    )
}
