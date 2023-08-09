import React from 'react';
import ShoppingListItem from '../Shopping-list-item/ShoppingListItem';

export default function ShoppingList({data}) {
    return data.map(item => <ShoppingListItem
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                            />)

}

