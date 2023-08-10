import React from 'react';
import ShoppingCartItem from '../Shopping-cart-item/ShoppingCartItem';
import { Helmet } from 'react-helmet';
import './shopping-cart.scss';


export default function ShoppingCart() {
    return (
        <>
            <Helmet>
                <meta name='description' 
                        content='Cart-page'
                />
                <title>Web shop cart</title>
            </Helmet>
                <div className='shopping-cart'>
                    <h2>Shopping cart</h2>
                    <ShoppingCartItem/>
                    <ShoppingCartItem/>
                    <ShoppingCartItem/>
                </div>
        </>
    )
}
