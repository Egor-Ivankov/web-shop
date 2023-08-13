import React from 'react';
import LikedList from '../components/Liked-list/LikedList';
import ErrorBoundary from '../components/Error-boundary/Errorboundary';

export default function LikedPage({liked, onDeleteLiked}) {
    return (
        <>
            <ErrorBoundary>
                <LikedList liked={liked} onDeleteLiked={onDeleteLiked}/>
            </ErrorBoundary>
        </>
    )
}
