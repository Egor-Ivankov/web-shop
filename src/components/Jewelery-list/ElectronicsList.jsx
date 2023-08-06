import React, { useEffect, useState } from 'react';
import useShopService from '../../services/useShopService';
import { setContent } from '../../utils/setContent';

import './electronicsList.scss';

export default function JeweleryList() {
    const {getCategory, process, setProcess} = useShopService();

    const [data, setData] = useState([]);

    const updateData = () => {
        getCategory('jewelery')
            .then(onDataLoaded)
            .then(() => setProcess('complete'))
    };

    const onDataLoaded = (newData) => {
        setData(newData);
    };

    useEffect(() => {
        updateData();
        // eslint-disable-next-line 
    },[])

    const renderElements = () => {
        return data.map(item => {
            return (
                <div className='electronics-item' key={item.title}>
                    <img className='electronics-item-image' src={item.image} alt="" />
                    <p className='electronics-item-title'>{item.title}</p>
                    <p className='electronics-item-price'>{item.price}$</p>
                </div>
            )
        }) 
    }


    return (
        <>
            <div className='electronics-container'>
                {setContent(process, renderElements)}
            </div>
        </>
    )
}
