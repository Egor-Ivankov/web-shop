import React, { lazy, Suspense } from 'react';
import Loading from '../components/Loading/Loading';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const MainPage = lazy(() => import('../pages/MainPage'));
const SinglePage = lazy(() => import('../pages/SinglePage'));
const ListLayout = lazy(() => import('../pages/layout/ListLayout'));
const ItemLayout = lazy(() => import('../pages/layout/ItemLayout'));
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
                                        Component={ ListLayout } 
                                        dataType={"electronics"}
                                        />
                            } 
                        />
                        <Route 
                            path='jewelery' 
                            element={ <SinglePage 
                                        Component={ ListLayout } 
                                        dataType={"jewelery"}
                                        />
                            } 
                        />
                        <Route 
                            path='mens-clothing' 
                            element={ <SinglePage 
                                        Component={ ListLayout } 
                                        dataType={'mens-clothing'}
                                        />
                            }
                        />
                        <Route 
                            path='womens-clothing'
                            element={ <SinglePage 
                                        Component={ ListLayout } 
                                        dataType={'womens-clothing'}
                                        />
                            }
                        />
                        <Route 
                            path='item/:id'
                            element={ < ItemLayout /> }
                        />
                        <Route path='*' element={<NotFoundPage/>}/>
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
}

export default App;
