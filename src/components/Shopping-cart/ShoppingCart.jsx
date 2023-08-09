import React from 'react';
import ShoppingCartItem from '../Shopping-cart-item/ShoppingCartItem';
import './shopping-cart.scss';


export default function ShoppingCart() {
    return (
        <div className='shopping-cart'>
            <h2>Shopping cart</h2>
            <ShoppingCartItem/>
            <ShoppingCartItem/>
            <ShoppingCartItem/>
        </div>
    )
}
