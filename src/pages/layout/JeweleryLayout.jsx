import React from 'react';
import '../../styles/list.scss';

const JeweleryLayout = ({data}) => {
    return data.map(item => {
        return (
            <div className='list-item' key={item.title}>
                <img className='list-item-image' src={item.image} alt="" />
                <p className='list-item-title'>{item.title}</p>
                <p className='list-item-price'>{item.price}$</p>
            </div>
        )
    }) 
}

export default JeweleryLayout;
