import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import BagSection from '../components/Bag-section/BagSection';
import BackPackSection from '../components/Back-pack-section/BackPackSection';

export default function MainPage() {
    return (
        <>
            <NavBar/>
            <BagSection/>
            <BackPackSection/>
        </>
    )
}
