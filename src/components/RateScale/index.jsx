/* Composant RateScale qui permet d'afficher la note sous forme d'étoile de chaque hôte */
import './rateScale.css'
import React from 'react';
import {FaStar } from 'react-icons/fa';
import {AiOutlineStar } from 'react-icons/ai'

function RateScale(props){
    const scaleValue = props.scaleValue
    const range = [1, 2, 3, 4, 5]

    return(

        <div className='rateScaleDiv'>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? 
                <p key={rangeElem.toString()} className="tertiary"><FaStar className='iconRate'/></p> : 
                <p key={rangeElem.toString()} className="tertiary"><AiOutlineStar className='iconRate2'/></p>
                
            )}
        </div>        
    )
}
/*⚝
<div>{scaleValue}★</div>*/
export default RateScale