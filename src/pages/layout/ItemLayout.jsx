import React from 'react';
import SingleItem from '../../components/SingleItem/SingleItem';
import ErrorBoundary from '../../components/Error-boundary/Errorboundary';

const ItemLayout = () => {
    return (
        <>
            <ErrorBoundary>
                <SingleItem/>
            </ErrorBoundary>
        </>
    );
}

export default ItemLayout;
