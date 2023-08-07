import React, { useState, useEffect } from 'react';
import useShopService from '../../services/useShopService';
import setContent from '../../utils/setContent';
import './bagSection.scss';

const BagSection = () => {
    const {getProducts, process, setProcess} = useShopService();
    const [data, setData] = useState([]);

    const updateData = () => {
        getProducts(1)
            .then(onDataLoaded)
            .then(() => setProcess('complete'))
    };

    const onDataLoaded = (newData) => {
        setData(newData);
    };

    useEffect(() => {
        updateData();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {setContent(process, View, data)}
        </>
    );
};

const View = ({data}) => {
    return (
        <section>
            <div className='container'>
                <div className="main">
                    <h2>{data.title}</h2>
                    <img src={data.image} alt='bag'/>
                </div>
                <div className='information'>
                    <p className='description'>{data.description}</p>
                    <p className='price'>{data.price} $</p>
                    <a href="#/">More detailed &gt; </a>
                </div>
                <p className='text'>Fjallraven. Simple.impossible.</p>
            </div>
        </section>
    );
};

export default BagSection;
