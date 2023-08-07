import React, { lazy, Suspense } from 'react';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading/Loading';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const MainPage = lazy(() => import('../pages/MainPage'));
const SinglePage = lazy(() => import('../pages/SinglePage'));
const ElectronicsLayout = lazy(() => import('../pages/layout/ElectronicsLayout'));
const JeweleryLayout = lazy(() => import('../pages/layout/JeweleryLayout'));
const MensClothingLayout = lazy(() => import('../pages/layout/MensClothingLayout'));
const WomensClothingLayout = lazy(() => import('../pages/layout/WomensClothingLayout'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const App = () => {
    return (
        <>
            <Suspense fallback={<Loading/>}>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<MainPage/>}/>
                        <Route 
                            path='electronics' 
                            element={ <SinglePage 
                                        Component={ ElectronicsLayout } 
                                        dataType={"electronics"}
                                        />
                            } 
                        />
                        <Route 
                            path='jewelery' 
                            element={ <SinglePage 
                                        Component={ JeweleryLayout } 
                                        dataType={"jewelery"}
                                        />
                            } 
                        />
                        <Route 
                            path='mens-clothing' 
                            element={ <SinglePage 
                                        Component={ MensClothingLayout } 
                                        dataType={'mens-clothing'}
                                        />
                            }
                        />
                        <Route 
                            path='womens-clothing'
                            element={ <SinglePage 
                                        Component={ WomensClothingLayout } 
                                        dataType={'womens-clothing'}
                                        />
                            }
                        />
                        <Route path='*' element={<NotFoundPage/>}/>
                    </Route>
                </Routes>
            </Suspense>
            <Footer/>
        </>
    );
}

export default App;
