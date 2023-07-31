import React from 'react';
import error from '../../img/error.gif';

import './error.scss';

const Error = () => {
    return (
        <figure>
            <img className='error' src={error} alt="error" />
        </figure>
    );
}

export default Error;
