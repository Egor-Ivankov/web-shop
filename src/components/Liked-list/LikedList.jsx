import React from 'react';
import LikedListItem from '../Liked-list-item/LikedListItem';
import heart from '../../img/heart.png';
import { Link } from 'react-router-dom';
import './liked-list.scss';

export default function LikedList({liked, onDeleteLiked}) {
    return (
        <div className='favorites-list'>
            <h2>Favorites list</h2>
            {liked.length !== 0
                ? <View liked={liked} onDeleteLiked={onDeleteLiked}/>
                : <EmptyLikedList/>
            }
        </div>
    )
}

const View = ({liked, onDeleteLiked}) => liked.map(item => <LikedListItem 
                                                                item={item} 
                                                                key={item.id} 
                                                                onDeleteLiked={onDeleteLiked}
                                                            />);

const EmptyLikedList = () => {
    return (
        <div className='empty-liked-container'>
            <img src={heart} alt="heart" />
            <p>Favorites list is empty</p>
            <Link to="/" className='empty-liked-container-link'>Home</Link>
        </div>
    )
}   
