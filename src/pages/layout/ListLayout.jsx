import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/list.scss';

const ListLayout = ({data}) => {
    return data.map(item => {
        return (
            <Link className='link' to={`/item/${item.id}`} key={item.id}>
                <div className='list-item'>
                    <img className='list-item-image' src={item.image} alt={item.title} />
                    <div className="list-item-container">
                        <p className='list-item-title'>{item.title}</p>
                        <p className='list-item-price'>{item.price}$</p>
                    </div>
                </div>
            </Link>
        )
    }) 
}

export default ListLayout;