import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../img/not-found.jpg';
import '../styles/style.scss';

export default function NotFoundPage() {
    return (
        <div className='not-found'>
            <img className="not-found-image" src={notFound} alt="not-found" />
            <Link to="/"><button className='not-found-btn'>Home</button></Link>
        </div>
    )
}
