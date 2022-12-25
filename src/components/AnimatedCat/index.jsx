import './animatedCat.scss';

function AnimatedCat(){

    return(
        <a className="cat" href='https://www.youtube.com/watch?v=NwBgbFtsVEk' rel="noreferrer" target="_blank">
            <div className="ear ear--left"></div>
            <div className="ear ear--right"></div>
            <div className="face">
                <div className="eye eye--left">
                    <div className="eye-pupil"></div>
                </div>
                <div className="eye eye--right">
                    <div className="eye-pupil"></div>
                </div>
                <div className="muzzle"></div>
            </div>
        </a>
    )
}

export default AnimatedCat;