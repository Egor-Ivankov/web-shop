import React from 'react';
import BagSection from '../components/Bag-section/BagSection';
import Footer from '../components/Footer/Footer';
import ErrorBoundary from '../components/Error-boundary/Errorboundary';
import { Helmet } from 'react-helmet';


export default function MainPage() {
    return (
        <>
            <Helmet>
                <meta name='description' 
                            content='List-page'
                    />
                <title>Web shop</title>
            </Helmet>
            <ErrorBoundary>
                <BagSection/>
            </ErrorBoundary>
            <ErrorBoundary>
                <Footer/>
            </ErrorBoundary>
        </>
    )
}
