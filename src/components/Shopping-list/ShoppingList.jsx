import React from 'react';
import ShoppingListItem from '../Shopping-list-item/ShoppingListItem';
import ErrorBoundary from '../Error-boundary/Errorboundary';

export default function ShoppingList({data, cards, getCards}) {

    return data.map(item => {
        return (
            <>
                <ErrorBoundary>
                    <ShoppingListItem
                                key={item.id}
                                cards={cards}
                                getCards={getCards}
                                item={item}
                    />
                </ErrorBoundary>
            </>
        )
    }
    )
}

