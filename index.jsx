import './header.css';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logotest.PNG';
import { FaHome, FaQuoteLeft, FaBook, FaTv } from 'react-icons/fa';

function Header() {

  var [before, setBefore] = useState('Home');

  const changePage = event => {
    console.log(before)

    let getBefore = document.getElementById(before);
    getBefore.classList.remove('navigationOn');

    event.currentTarget.classList.add('navigationOn');
    var linkClicked = event.target.dataset.id;
    setBefore(linkClicked);
  }

  return (
    <div className='headerDiv'>
      <p>
        <img src={logo} alt="Logo PandaDev" className='logoNav'/>
      </p>

      <nav className='navHeader'>
        <Link to="/home" id='Home' data-id="Home" className='navigationLink navigationOn' onClick={changePage}> <FaHome className='iconHeader'/> Accueil</Link>
        <Link to="/quote" id='Quote' data-id="Quote" className='navigationLink' onClick={changePage}> <FaQuoteLeft className='iconHeader'/> Citations</Link>
        <Link to="/book" id='Book' data-id="Book" className='navigationLink' onClick={changePage}><FaBook className='iconHeader'/> Livres</Link>
        <Link to="/movie" id='Movie' data-id="Movie" className='navigationLink' onClick={changePage}><FaTv className='iconHeader'/> Films</Link>
      </nav>
    </div>
  );
}

export default Header;
