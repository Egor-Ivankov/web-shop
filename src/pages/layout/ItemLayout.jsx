import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useShopService from '../../services/useShopService';
import setContent from '../../utils/setContent';
import '../../styles/style.scss';

const ItemLayout = () => {
    const {getProducts, process, setProcess} = useShopService();
    const {id} = useParams();
    const [data, setData] = useState(null);

    const updateData = () => {
        getProducts(id)
            .then(onDataLoaded)
            .then(() => setProcess('complete'))
    };

    const onDataLoaded = (newData) => {
        setData(newData);
    };

    const renderItems = ({data}) => {
        return(
            <div className='single-item'>
                <img src={data.image} alt={data.title} />
                <div className="single-item-text">
                    <h2>{data.title}</h2>
                    <p>{data.description ? data.description : 'There is character has not a description'}</p>
                    <p className='price'>{data.price}$</p>
                    <p className='rate'>Rate {data.rating.rate}/5</p>
                </div>
            </div>
        )
    };

    useEffect(() => {
        updateData();
        // eslint-disable-next-line 
    }, [id]);

    return (
        <>
            {setContent(process, renderItems, data)}
        </>
    );
}

export default ItemLayout;
