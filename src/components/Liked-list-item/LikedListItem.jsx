import React from 'react';
import cross from '../../img/icons/cross-icon.png';
import './liked-list-item.scss';

export default function LikedListItem({item, onDeleteLiked}) {
    return (
        <div className='liked-container'>
            <div className="liked-container-scale">
                <img className='liked-container-scale-image' src={item.image} alt={item.title} />
            </div>
            <div className="liked-container-information">
                <p className='liked-container-information-title'>{item.title}</p>
                <p className='liked-container-information-description'>{item.description}</p>
                <p className='liked-container-information-price'>{item.price}$</p>
            </div>
            <div className="liked-container-buttons">
                <button className='liked-container-buttons-cross' onClick={() => onDeleteLiked(item.id)}><img src={cross} alt="cross" /></button>
                <button className='liked-container-buttons-buy'>Buy</button>
            </div>
        </div>
    )
}
