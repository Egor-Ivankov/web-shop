import React from 'react';
import ShoppingCart from '../components/Shopping-cart/ShoppingCart';

export default function ShoppingCartPage({cards}) {
    return (
        <>
            <ShoppingCart cards={cards}/>
        </>
    )
}
