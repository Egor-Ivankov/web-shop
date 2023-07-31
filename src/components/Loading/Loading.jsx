import React from 'react';
import loading from '../../img/loading.gif';
import './loading.scss';

const Loading = () => {
    return (
            <figure>
                <img className='loading' src={loading} alt="loading" />
            </figure>
    );
}

export default Loading;
