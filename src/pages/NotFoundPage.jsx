import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../img/not-found.jpg';
import { Helmet } from 'react-helmet';
import '../styles/style.scss';

export default function NotFoundPage() {
    return (
        <>
            <Helmet>
                <meta name='description' 
                        content='This page is displayed when an error occurred while connecting to the server '
                />
                <title>Page not found</title>
            </Helmet>
            <div className='not-found'>
                <img className="not-found-image" src={notFound} alt="not-found" />
                <Link to="/"><button className='not-found-btn'>Home</button></Link>
            </div>
        </>
    )
}
