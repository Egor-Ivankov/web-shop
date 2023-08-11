import React, {useState} from 'react';
import like from '../../img/icons/heart-icon.png';
import buy from '../../img/animations/buy.gif';
import { Link } from 'react-router-dom';
import ErrorBoundary from '../Error-boundary/Errorboundary';
import './shopping-list.scss';

export default function ShoppingListItem({cards, getCards, item}) {
    const SetHover = () => {
        const [isHovering, setIsHovering] = useState(false);

        const handleMouseOver = () => {
            setIsHovering(true);
        }

        const handleMouseOut = () => {
            setIsHovering(false);
        }

        const ShoppingListItemBtns = ({cards, getCards}) => {
            return (
                <div className='btns'>
                    <img src={like} alt="like-icon" />
                    <img src={buy} alt="buy-icon" onClick={() => {
                        getCards(cards, item);
                    }}/>
                </div>
            )
        }

        return (
            <div className='list-item' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {isHovering ? <ShoppingListItemBtns getCards={getCards} cards={cards}/> : null}
                <Link className='link' to={`/item/${item.id}`} key={item.id}>
                    <div className="scale">
                        <img className='list-item-image' src={item.image} alt={item.title} />
                    </div>
                    <p className='list-item-title'>{item.title}</p>
                    <div className="list-item-container">
                        <p className='list-item-price'>{item.price}$</p>
                    </div>
                </Link>
            </div>
        )
    }

    return (
        <>
            <ErrorBoundary>
                <SetHover/>
            </ErrorBoundary>
        </>
    )
}