import React from 'react';
import Loading from '../components/Loading/Loading';
import Error from '../components/Error/Error';

const setContent = (process, Component) => {
    switch(process) {
        case 'waiting':
            return;
        case 'loading':
            return <Loading/>;
        case 'complete':
            return <Component/>
        case 'error':
            return <Error/>
        default:
            throw new Error ('get unexpected process')
    }
}

const setNav = (process, Component) => {
    switch(process) {
        case 'waiting':
            return;
        case 'loading':
            return <p>Lists are loading...</p>
        case 'complete':
            return <Component/>
        case 'error':
            return <p>An error occurred while requesting the server, please reload the page...</p>
        default:
            throw new Error ('get unexpected process')
    }
}


export {setContent, setNav};
