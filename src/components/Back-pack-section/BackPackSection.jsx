import React from 'react';
import backPack from '../../img/back-pack.png';
import './backPackSection.scss';

export default function BackPackSection() {
    return (
    <section>
        <div className='back-pack-container'>
            <div>
                <p>
                    Fjallraven Kanken backpacks need no introduction.
                    Many people know about Fjallraven itself only thanks to them.
                    Today, the Kanken is the most recognizable urban backpack in the world,
                    which recently celebrated its 40th anniversary.
                    We decided to look into the reasons for its frenzied popularity,
                    as well as to give you an excursion through the entire Kanken model line.
                </p>
            </div>
            <img src={backPack} alt="back-pack" />
            <div className='back-pack-text'>
                <p className='back-pack-text-price'>99.9$</p>
                <a href="#/">More detailed &gt; </a>
                <h2>Fjallraven - Kanken <br/> Royal Blue</h2>
            </div>
        </div>
    </section>
    )
}

