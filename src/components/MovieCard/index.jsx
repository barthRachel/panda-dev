import './movieCard.css'
import { useState } from 'react';
import RateScale from '../RateScale';
import {FaArrowRight} from 'react-icons/fa'

function MovieCard({title, director, theme, cast, year, rating, cover}){

    const [isShown, setIsShown] = useState(false);

    const isHover = () => {
        setIsShown(true)
    }

    const isOut = () => {
        setIsShown(false)
    }

    return(
        <div className="movieCard" onMouseOver={isHover} onMouseOut={isOut}>
            <div className='coverCard'>
                <img src={cover} alt="Movie Cover" />
            </div>
            {isShown && (
                <div className='movieDescription'>
                    <h3>{title}</h3>
                    <p className='year'>{year}</p>

                    <p className='director'>De : {director}</p>
                    <p className='theme'>Genre principal : {theme}</p>


                    <div className='actors'>
                        Avec :
                        <ul>
                            {
                                cast.map((actors, index) => (
                                    <li key={`${actors[index]}-${index}`}> <FaArrowRight className='iconeActors'/> {actors}</li>
                                ))
                            }
                        </ul>
                    </div>

                    <RateScale scaleValue={rating}/>
            </div>
            )}
        </div>
    )
}

export default MovieCard;