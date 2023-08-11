import React from 'react';
import ShoppingCart from '../components/Shopping-cart/ShoppingCart';
import ErrorBoundary from '../components/Error-boundary/Errorboundary';

export default function ShoppingCartPage({cards}) {
    return (
        <>
            <ErrorBoundary>
                <ShoppingCart cards={cards}/>
            </ErrorBoundary>
        </>
    )
}
