import React from 'react';
import ShoppingCartItem from '../Shopping-cart-item/ShoppingCartItem';
import shoppingCart from '../../img/shopping-cart.png';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './shopping-cart.scss';


export default function ShoppingCart({cards, onDeleteCards}) {
    
    return (
        <>
            <Helmet>
                <meta name='description' 
                        content='Cart-page'
                />
                <title>Web shop cart</title>
            </Helmet>
                <div className='shopping-cart'>
                    <h2>Shopping cart</h2>
                    {cards.length !== 0 
                        ? <View cards={cards} onDeleteCards={onDeleteCards}/>
                        : <EmptyCart/>}
                </div>
        </>
    )
}

const View = ({cards, onDeleteCards}) => cards.map((item, i) => <ShoppingCartItem 
                                                                    item={item} 
                                                                    key={i} 
                                                                    onDeleteCards={onDeleteCards}
                                                                />);

const EmptyCart = () => {
    return (
        <div className='shopping-cart-empty'>
            <img className='shopping-cart-empty-img' src={shoppingCart} alt="shopping-cart" />
            <p className='shopping-cart-empty-par'>The shopping cart is empty</p>
            <Link to="/" className='shopping-cart-empty-link'>Home</Link>
        </div>
    )
}