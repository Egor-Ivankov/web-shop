import React from 'react';
import ShoppingList from '../../components/Shopping-list/ShoppingList';

const ListLayout = ({data, cards, getCards}) => {

    return (
        <ShoppingList 
            data={data} 
            cards={cards}
            getCards={getCards}
        />
    )
}


export default ListLayout;