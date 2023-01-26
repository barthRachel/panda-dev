import '../css/Home.css';
import explaination from '../explaination.json';
import Collapse from '../components/Collapse';import { useState, useEffect } from 'react';
import { WiDaySunny, WiCloud, WiRain, WiFog, WiSnow, WiRainMix, WiThunderstorm, WiHail, WiAlien} from "react-icons/wi";
import {FaArrowRight} from 'react-icons/fa';


function Home() {
  document.title = "Pandadev | Home"

  const token = "175dc0b1ef4483d01792fe213542dd5630a1094f493c383805e3a9fd7d205c22";

  let weatherIcon, gifWeather, caption;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cityName, setCityName] = useState([]);
  const [cityCP, setCP] = useState([]);
  const [tempMin, setTempMin] = useState([]);
  const [tempMax, setTempMax] = useState([]);
  const [weatherNumber, setWeather] = useState([]);
  const [probRain, setProbRain] = useState([]);
  const [wind, setWind] = useState([]);

  useEffect(() => {
    fetch("https://api.meteo-concept.com/api/forecast/daily/0?token="+token+"&insee=75056")
      .then(res => res.json())
      .then((result) => {
        setIsLoaded(true);
        setCityName(result.city.name);
        setCP(result.city.cp);
        setTempMin(result.forecast.tmin);
        setTempMax(result.forecast.tmax);
        setWeather(result.forecast.weather);
        setProbRain(result.forecast.probarain);
        setWind(result.forecast.wind10m);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      })
  })

  if(weatherNumber === 0){
    weatherIcon = <WiDaySunny />
    gifWeather="https://media.giphy.com/media/iJgoGwkqb1mmH1mES3/giphy.gif"
    caption="En théorie il fait beau aujourd'hui sur Paris !"
  } else if(weatherNumber >= 0 && weatherNumber <= 5){
    weatherIcon = <WiCloud />
    gifWeather="https://media.giphy.com/media/26BGDQxDCZDFHW5Ne/giphy.gif"
    caption="Les nuages ne nous lâchent pas aujourd'hui..."
  } else if((weatherNumber >= 10 && weatherNumber <= 16) || (weatherNumber >= 40 && weatherNumber <= 48) || (weatherNumber >= 210 && weatherNumber <= 212)){
    weatherIcon = <WiRain />
    gifWeather="https://media.giphy.com/media/39fj7g99qyD72/giphy.gif"
    caption="We will sing in the rain today !"
  } else if( weatherNumber >= 6 && weatherNumber <= 7){
    weatherIcon = <WiFog />
    gifWeather="https://media.giphy.com/media/xEjTM5COAKyNa/giphy.gif"
    caption="Le brouillard s'abbat sur nous... encore !"
  } else if((weatherNumber >= 20 && weatherNumber <= 22) ||(weatherNumber >= 60 && weatherNumber <= 68) ||(weatherNumber >= 220 && weatherNumber <= 222)){
    weatherIcon = <WiSnow />
    gifWeather="https://media.giphy.com/media/26gR0BuSZabqSyNig/giphy.gif"
    caption="Vous savez ce qu'il reste à faire avec toute cette neige ?"
  } else if((weatherNumber >= 30 && weatherNumber <= 32) ||(weatherNumber >= 70 && weatherNumber <= 78) || (weatherNumber >= 230 && weatherNumber <= 232)){
    weatherIcon = <WiRainMix />
    gifWeather="https://media.giphy.com/media/SShiFRFYUyWKMeQz90/giphy.gif"
    caption="Que faire avec cette neige et cette pluie mélangée ?"
  } else if(weatherNumber >= 100 && weatherNumber <= 142){
    weatherIcon = <WiThunderstorm />
    gifWeather="https://media.giphy.com/media/3oz8xuDgwvlM6TXMRi/giphy.gif"
    caption="Ca vous dit de rester à la maison ?"
  } else if(weatherNumber === 235){
    weatherIcon = <WiHail />
    gifWeather="https://media.giphy.com/media/3oEduEcLBYfkoEi2TS/giphy.gif"
    caption="Ici ça grêle hein !"
  } else {
    weatherIcon = <WiAlien />
    gifWeather="https://media.giphy.com/media/NDJWGU4n74di0/giphy.gif"
    caption="Impossible de savoir quel temps il fait !"
  }

  if(error){
      return <div> Erreur : {error.message}</div>
  } else if(!isLoaded){
      return <div> Chargement...</div>
  }

  return (
    <div className="divBox">
      <div className='entireBox'>
        <div className='homePresentation'>
          <h1>Bienvenue !</h1>
          <p>Je ne sais pas comment vous êtes arrivés là... mais merci !</p>
          <p><img src='https://media.giphy.com/media/lTQF0ODLLjhza/giphy.gif' alt='Gif Kiss'/></p>
        </div>
        <div className='homeExplaination'>
          <h2>Quelques explications !</h2>
          {
            explaination.map((infos, index) => 
              <Collapse
                key={`${infos.title}-${index}`}
                title={infos.title}
                texte={infos.text}
              />
            )
          }
        </div>
        <div className='meteoParis'>
          <h2>Un peu de météo !</h2>
          <div className='weatherAndGif'>
            <div className='cardDivBox'>
              <div className='cardTitle primaryBackground'>
                <h3> {cityName} - {cityCP}</h3>
              </div>
              <div className='cardDescription whiteBackground'>
                <p className='temp'>Températures : {tempMin} °C <FaArrowRight className='iconArrow'/> {tempMax} °C </p>
                <p>Temps général :<br/> <span className='weatherIconSpan'>{weatherIcon}</span></p>
                <p>Probabilité de pluie : {probRain} % </p>
                <p>Vent moyen : {wind} km/h</p>
              </div>
            </div>
            <div className='gifWeather'>
              <img src={gifWeather} alt='Gif en fonction du temps'/>
              <p>{caption}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
