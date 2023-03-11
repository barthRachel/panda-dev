import '../css/Movie.css';
import movieList from '../movie.json';
import {useState } from 'react';
import {FaTv} from 'react-icons/fa';
import GenerateCard from '../components/GenerateCard';
import MovieCard from '../components/MovieCard';
import BackToTop from 'react-back-to-top-button';

function Movie() {

  document.title = "Pandadev | Films";

  function getRandomNumber(){ //fonction qui génère un nombre au hasard entre 0 et le nombre d'entrée dans quoteList
    return Math.floor(Math.random() * (movieList.length - 0) + 0)
  }

  const [random, setRandom] = useState(getRandomNumber); //initialisation de random avec un nombre au hasard pour ne pas avoir la même citation au début
  console.log(random)

  const getRandomMovie = () => { //gestion du onClick
    setRandom(getRandomNumber);
  }

  return (
    <div className="divBox">
      <div className='entireBox'>
        <div className='divPresentation'>
          <h1>On se matte un film ?</h1>
          <p>À vous de choisir. Si vous ne savez pas ce qu'on peut regarder, vous pouvez toujours générer un titre au pif !<br />
            Perso, je m'occupe du pop-corn et des boissons.
          </p>
        </div>
        <div className="divGenerate">
          <h2>Découvrez un film <FaTv className='generateIcon'/></h2>
          <GenerateCard 
            author={movieList[random].director}
            text={movieList[random].title}
          />
          <button className='generateButton' onClick={getRandomMovie}>Générer un film</button>        
        </div>
        <div className='movieGetAll'>
          <h2>Ou peut-être qu'un titre vous dira dedans..</h2>
          <div className='getAllBloc'>
            {
              movieList.map((infos, index) => (
                <MovieCard
                  key={`${infos.title}-${index}`}
                  title={infos.title}
                  director={infos.director}
                  theme={infos.theme}
                  cast={infos.cast}
                  year={infos.year}
                  rating={infos.rating}
                  cover={infos.cover}
                />
              ))
            }
          </div>
        </div>

        <BackToTop
          showOnScrollDown
          showAt={190}
          speed={900}
          easing="easeInOutQuint"
        >
          <span className='backToTop primaryBackground'>&#5169;</span>
        </BackToTop>
      </div>

    </div>

  );
}
  
export default Movie;
  