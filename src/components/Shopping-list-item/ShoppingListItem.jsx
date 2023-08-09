import React, {useState} from 'react';
import ShoppingListItemBtns from '../Shopping-list-item-btns/ShoppingListItemBtns';
import { Link } from 'react-router-dom';
import './shopping-list.scss';

export default function ShoppingListItem({id, image, title, price}) {
    const SetHover = () => {
        const [isHovering, setIsHovering] = useState(false);

        const handleMouseOver = () => {
            setIsHovering(true);
        }

        const handleMouseOut = () => {
            setIsHovering(false);
        }

        return (
            <Link className='link' to={`/item/${id}`} key={id}>
                <div className='list-item' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        {isHovering ? <ShoppingListItemBtns/> : null}
                    <img className='list-item-image' src={image} alt={title} />
                        <p className='list-item-title'>{title}</p>
                    <div className="list-item-container">
                        <p className='list-item-price'>{price}$</p>
                    </div>
                </div>
            </Link>
        )
    }

    return (
        <>
            <SetHover/>
        </>
    )
}