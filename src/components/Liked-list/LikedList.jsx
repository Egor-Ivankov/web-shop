import React from 'react';
import LikedListItem from '../Liked-list-item/LikedListItem';
import './liked-list.scss';

export default function LikedList({liked}) {
    return (
        <>
            {liked.length 
                ?
                    <View liked={liked}/>
                :
                null
            }
        </>
    )
}

const View = ({liked}) => liked.map(item => <LikedListItem item={item} key={item.id}/>);

