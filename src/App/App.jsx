import React, {lazy, Suspense} from 'react';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading/Loading';
import {Routes, Route} from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const MainPage = lazy(() => import('../pages/MainPage'));
const ElectronicsPage  = lazy(() => import('../pages/ElectronicsPage'));
const JeweleryPage  = lazy(() => import('../pages/JeweleryPage'));
const MensClothingPage  = lazy(() => import('../pages/MensClothingPage'));
const WomensClothingPage  = lazy(() => import('../pages/WomensClothingPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const App = () => {
    return (
        <>
            <Suspense fallback={<Loading/>}>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                            <Route index element={<MainPage/>}/>
                            <Route path='electronics' element={<ElectronicsPage/>}/>
                            <Route path='jewelery' element={<JeweleryPage/>}/>
                            <Route path='mens-clothing' element={<MensClothingPage/>}/>
                            <Route path='womens-clothing' element={<WomensClothingPage/>}/>
                            <Route path='*' element={<NotFoundPage/>}/>
                    </Route>
                </Routes>
            </Suspense>
            <Footer/>
        </>
    );
}

export default App;
