import '../css/Book.css';
import bookList from '../book.json';
import {useState} from 'react';
import {FaBook} from 'react-icons/fa';
import GenerateCard from '../components/GenerateCard';

function Book() {
    document.title = "Pandadev | Livres"

    var [clicked, setClick] = useState(false);
    var [before, setBefore] = useState('Amour');

    function getRandomNumber(min, max){ //fonction qui génère un nombre au hasard entre 0 et le nombre d'entrée dans quoteList
      return Math.floor(Math.random() * (max - min) + min)
    }

    const getBookFiltred = event =>{ //gestion du tri au click du bouton
      console.log(before);

      //retrait de la classe tertiaryBackground sur le dernier bouton cliquer
      var getBefore = document.getElementById(before);
      getBefore.classList.remove('tertiaryBackground');

      //ajout de la classe tertiaryBackground sur le bouton actuel
      event.currentTarget.classList.add('tertiaryBackground');
      var themeClicked = event.target.dataset.id;
      setBefore(themeClicked);

      let bookListFiltred = bookList.filter(book => book.genre === themeClicked);
      console.log(before)
    
      const bookCover = document.getElementsByClassName('coverBook')
      const bookTitle = document.getElementsByClassName('bookTitle');
      const bookAuthor = document.getElementsByClassName('bookAuthor');
    
      for(let i = 0 ; i <= 2 ; i++){
        let book = bookListFiltred[bookListFiltred.length-(i+1)];
        bookCover[i].src= book.cover;
        bookTitle[i].textContent = book.title;
        bookAuthor[i].textContent = "~ "+book.author;
      }

      setClick(true);
    }

    const [random, setRandom] = useState(getRandomNumber(0, bookList.length)); //initialisation de random avec un nombre au hasard pour ne pas avoir la même citation au début
    console.log(random)

    const getRandmBook = () => { //gestion du onClick
      setRandom(getRandomNumber(0, bookList.length));
    }

    return (
      <div className='divBox'>
        <div className='entireBox'>
          <div className='divPresentation'>
            <h1>Plutôt d'humeur à lire un livre ?</h1>
            <p>Vous ne savez plus quoi lire car vous avez séché votre bibliothèque ? Vous êtes au bon endroit. <br/>
            Et si vous vous challengiez ? Générez un titre de livre au hasard et si vous ne l'avez pas déjà lu, alors faites le ! Peut-être que vous découvrirez une pépite.
            </p>
          </div>
          <div className="divGenerate">
            <h2>Découvrez un livre <FaBook className='generateIcon'/></h2>

            <GenerateCard 
              author={bookList[random].author}
              text={bookList[random].title}
            />
            <button className='generateButton' onClick={getRandmBook}>Générer un livre</button>   
          </div>
          <hr className='separateLine'/>
          <div className='bookByTheme'>
            
            <h2>Voir les 3 derniers titres du même thème</h2>
            <div className='bookByThemeDisplay'>
              <p className='tagList'>
                <button id='Amour' className='primaryBackground' data-id='Amour' onClick={getBookFiltred}>Amour</button>
                <button id='Aventure' className='primaryBackground' data-id='Aventure' onClick={getBookFiltred}>Aventure</button>
                <button id='Biographie' className='primaryBackground' data-id='Biographie' onClick={getBookFiltred}>Biographie</button>
                <button id='Fantastique' className='primaryBackground' data-id='Fantastique' onClick={getBookFiltred}>Fantastique</button>
                <button id='Histoire' className='primaryBackground' data-id='Histoire' onClick={getBookFiltred}>Histoire</button>
                <button id='Polar' className='primaryBackground' data-id='Polar' onClick={getBookFiltred}>Polar</button>
                <button id='Policier' className='primaryBackground' data-id='Policier' onClick={getBookFiltred}>Policier</button>
                <button id='Réaliste' className='primaryBackground' data-id='Réaliste' onClick={getBookFiltred}>Réaliste</button>
                <button id='Thriller' className='primaryBackground' data-id='Thriller' onClick={getBookFiltred}>Thriller</button>
              </p>

              <div className='bookByThemeBooks' style={clicked ? {display : "flex"} : {display : "none"}}>
                <div className='displayBook'>
                  <img src='' alt='Couverture du livre' className='coverBook'/>
                  <div className='bookTitleAuthorDisplay whiteBackground'>
                    <p className='bookTitle'></p>
                    <p className='bookAuthor'></p>
                  </div>
                </div>
                <div className='displayBook'>
                  <img src='' alt='Couverture du livre' className='coverBook'/>
                  <div className='bookTitleAuthorDisplay whiteBackground'>
                    <p className='bookTitle'></p>
                    <p className='bookAuthor'></p>
                  </div>
                </div>
                <div className='displayBook'>
                  <img src='' alt='Couverture du livre' className='coverBook'/>
                  <div className='bookTitleAuthorDisplay whiteBackground'>
                    <p className='bookTitle'></p>
                    <p className='bookAuthor'></p>
                  </div>
                </div>
              </div>

              <div className='bookByThemeBeforeClick' style={clicked ? {display : "none"} : {display : "block"}}>
                <img src='https://media.giphy.com/media/XBdaS9VD83Pk63s5DM/giphy.gif' alt='Click above !'/>
              </div>

            </div>
          </div>
        </div>
      </div>

    );
  }
  
  export default Book;
  