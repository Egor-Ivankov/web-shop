import React, { useState, useEffect } from 'react';
import {setContent} from '../utils/setContent';
import useShopService from '../services/useShopService';
import { Helmet } from 'react-helmet';
import '../components/Shopping-list-item/shopping-list.scss';

const SinglePage = ({Component, dataType}) => {
    const {process, setProcess, getCategory} = useShopService();
    const [data, setData] = useState(null);

    const updateData = () => {
        switch(dataType) {
            case 'electronics':
                getCategory('electronics')
                    .then(onDataLoaded)
                    .then(() => setProcess('complete'))
                break;
            case 'jewelery':
                getCategory('jewelery')
                    .then(onDataLoaded)
                    .then(() => setProcess('complete'))
                break;
            case 'mens-clothing':
                getCategory('men\'s clothing')
                    .then(onDataLoaded)
                    .then(() => setProcess('complete'))
                break;
            case 'womens-clothing':
                getCategory('women\'s clothing')
                    .then(onDataLoaded)
                    .then(() => setProcess('complete'))
                break;
            default:
                throw new Error(`Unexpected dataType - ${dataType}`);
        }
    };

    const onDataLoaded = (data) => {
        setData(data);
    };

    useEffect(() => {
        updateData();
        // eslint-disable-next-line
    }, [dataType]);

    return (
        <div className='list-container'>
            <>
            <Helmet>
                <meta name='description' 
                            content='List-page'
                    />
                <title>Web shop list</title>
            </Helmet>
                {setContent(process, Component, data)}
            </>
        </div>
    );
}

export default SinglePage;
