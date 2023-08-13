import React from 'react';
import ShoppingCart from '../components/Shopping-cart/ShoppingCart';
import ErrorBoundary from '../components/Error-boundary/Errorboundary';

export default function ShoppingCartPage({cards, onDeleteCards}) {
    return (
        <>
            <ErrorBoundary>
                <ShoppingCart cards={cards} onDeleteCards={onDeleteCards}/>
            </ErrorBoundary>
        </>
    )
}
