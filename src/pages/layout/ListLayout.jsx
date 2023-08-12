import React from 'react';
import ShoppingList from '../../components/Shopping-list/ShoppingList';
import ErrorBoundary from '../../components/Error-boundary/Errorboundary';

const ListLayout = ({data, cards, getCards, liked, getLiked}) => {

    return (
        <ErrorBoundary>
            <ShoppingList 
            data={data} 
            cards={cards}
            getCards={getCards}
            liked={liked}
            getLiked={getLiked}
            />
        </ErrorBoundary>
    )
}


export default ListLayout;