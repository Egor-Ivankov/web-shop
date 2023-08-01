import React from 'react';
import Loading from '../components/Loading/Loading';
import Error from '../components/Error/Error';

const setContent = (process, Component, data) => {
    switch(process) {
        case 'waiting':
            return;
        case 'loading':
            return <Loading/>;
        case 'complete':
            return <Component data={data}/>
        case 'error':
            return <Error/>
        default:
            throw new Error ('get unexpected process')
    }
}

export {setContent};
