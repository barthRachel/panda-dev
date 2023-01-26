import '../css/Quote.css';
import quoteList from '../quote.json';
import {useState } from 'react';
import {FaQuoteRight} from 'react-icons/fa';
import GenerateCard from '../components/GenerateCard';
import AnimatedCat from '../components/AnimatedCat';


function Quote() {

    document.title = "Pandadev | Citations"

    function getRandomNumber(){ //fonction qui génère un nombre au hasard entre 0 et le nombre d'entrée dans quoteList
      return Math.floor(Math.random() * (quoteList.length - 0) + 0)
    }

    const [random, setRandom] = useState(getRandomNumber); //initialisation de random avec un nombre au hasard pour ne pas avoir la même citation au début

    const getRandomQuote = () => { //gestion du onClick
      setRandom(getRandomNumber);
    }

    return (
      <div className='divBox'>
        <div className='entireBox quoteBox'>
          <div className='divPresentation'>
            <h1>Besoin d'un moment pour réfléchir ?</h1>
            <p>Le plus simple est de cliquer sur le bouton de génération de citations et posez-vous pour y réfléchir.<br/>
            Ah ! Au passage... il paraît que si vous cliquer sur le chat en dessous, vous réfléchirez moins... Je dis ça comme ça ! </p>
          </div>
          <div className="divGenerate">
            <h2>Découvrez une citation <FaQuoteRight className='generateIcon'/></h2>
            <GenerateCard 
              author={quoteList[random].author}
              text={quoteList[random].quote}
            />
            <button className='generateButton' onClick={getRandomQuote}>Générer une citation</button>        
          </div>
          <hr className='separateLine'/>
          <div className='animatedCatBox'>
            <div className='animatedCat'>
              <AnimatedCat />
            </div>
          </div>
        </div>
      </div>

    );
  }
  
  export default Quote;
  