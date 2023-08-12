import React from 'react';
import ShoppingListItem from '../Shopping-list-item/ShoppingListItem';
import ErrorBoundary from '../Error-boundary/Errorboundary';

export default function ShoppingList({data, cards, getCards, liked, getLiked}) {

    return data.map(item => {
        return (
            <div key={item.id}>
                <ErrorBoundary>
                    <ShoppingListItem
                                cards={cards}
                                getCards={getCards}
                                liked={liked}
                                getLiked={getLiked}
                                item={item}
                    />
                </ErrorBoundary>
            </div>
        )
    }
    )
}

