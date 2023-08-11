import React, { lazy, Suspense, useState } from 'react';
import Loading from '../components/Loading/Loading';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from '../components/Navigation-bar/NavigationBar';

const MainPage = lazy(() => import('../pages/MainPage'));
const SinglePage = lazy(() => import('../pages/SinglePage'));
const ListLayout = lazy(() => import('../pages/layout/ListLayout'));
const ItemLayout = lazy(() => import('../pages/layout/ItemLayout'));
const LikedList = lazy(() => import('../pages/LikedPage'));
const ShoppingCart = lazy(() => import('../pages/ShoppingCartPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const App = () => {
    const [cards, setCards] = useState([]);

    const getCards = (cards, newCards) => {
        setCards([...cards, newCards]);
    };


    return (
        <>
            <Suspense fallback={<Loading/>}>
                <Routes>
                    <Route path='/' element={<NavigationBar/>}>
                        <Route index element={<MainPage/>}/>
                        <Route 
                            path='electronics' 
                            element={ <SinglePage 
                                        Component={ ListLayout } 
                                        dataType={"electronics"}
                                        cards={cards}
                                        getCards={getCards}
                                        />
                            } 
                        />
                        <Route 
                            path='jewelery' 
                            element={ <SinglePage 
                                        Component={ ListLayout } 
                                        dataType={"jewelery"}
                                        cards={cards}
                                        getCards={getCards}
                                        />
                            } 
                        />
                        <Route 
                            path='mens-clothing' 
                            element={ <SinglePage 
                                        Component={ ListLayout } 
                                        dataType={'mens-clothing'}
                                        cards={cards}
                                        getCards={getCards}
                                        />
                            }
                        />
                        <Route 
                            path='womens-clothing'
                            element={ <SinglePage 
                                        Component={ ListLayout } 
                                        dataType={'womens-clothing'}
                                        cards={cards}
                                        getCards={getCards}
                                        />
                            }
                        />
                        <Route 
                            path='item/:id'
                            element={ < ItemLayout /> }
                        />
                        <Route 
                            path='liked-list'
                            element={ < LikedList /> }
                        />
                        <Route 
                            path='shopping-cart'
                            element={ < ShoppingCart cards={cards} /> }
                        />
                        <Route path='*' element={<NotFoundPage/>}/>
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
}

export default App;
