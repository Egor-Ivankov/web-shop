import React from 'react';
import cross from '../../img/icons/cross-icon.png';
import './shoppingCartItem.scss';

export default function ShoppingCartItem({item, onDeleteCards}) {
    return (
        <div className="shopping-cart-container">
            <ul>
                <li>
                    <div className='shopping-cart-container-item'>
                        <div className="scale">
                            <img src={item.image} alt="test" className='shopping-cart-container-item-img'/>
                        </div>
                        <p className='title'>{item.title}</p>
                        <span>Кол-во: </span>
                        <input type="number"/>
                        <p>{item.price} $</p>
                        <button onClick={() => onDeleteCards(item.id)}><img src={cross} alt="cross" /></button>
                    </div>
                </li>
                
            </ul>
        </div>
    )
}
