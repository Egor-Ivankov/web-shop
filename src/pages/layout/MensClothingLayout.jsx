import React from 'react';
import '../../styles/list.scss';

const MensClothingLayout = ({data}) => {
    return data.map(item => {
        return (
            <div className='list-item' key={item.title}>
                <img className='list-item-image' src={item.image} alt="" />
                <div className="list-item-container">
                    <p className='list-item-title'>{item.title}</p>
                    <p className='list-item-price'>{item.price}$</p>
                </div>
            </div>
        )
    }) 
}

export default MensClothingLayout;
