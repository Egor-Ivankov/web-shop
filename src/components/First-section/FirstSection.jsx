import React, {useEffect, useState} from 'react';
import useShopService from '../../services/useShopService';
import './firstSection.scss';

const FirstSection = () => {
    const {getProducts} = useShopService();
    const [data, setData] = useState([]);

    const updateData = () => {
        getProducts(1)
            .then(onDataLoaded)
    };

    const onDataLoaded = (newData) => {
        setData(newData);
    };

    useEffect(() => {
        updateData();
        // eslint-disable-next-line
    }, []);


    return (
        <section>
            <div className='container'>
                <h1>{data.title}</h1>
                <img className='bag' src={data.image} alt='bag'/>
            </div>
        </section>
    );
}

export default FirstSection;
