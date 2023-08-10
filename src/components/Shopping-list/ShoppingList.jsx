import React from 'react';
import ShoppingListItem from '../Shopping-list-item/ShoppingListItem';

export default function ShoppingList({data, cards, getCards}) {

    return data.map(item => <ShoppingListItem
                                key={item.id}
                                cards={cards}
                                getCards={getCards}
                                item={item}
                            />
    )
}

