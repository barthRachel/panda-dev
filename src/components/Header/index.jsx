import './header.css';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo_contours.png';
import { FaHome, FaQuoteLeft, FaBook, FaTv } from 'react-icons/fa';

function Header() {
  var [before, setBefore] = useState('Home');

  var changePage = event => {
    
    let getBefore = document.getElementById(before);
    
    if(getBefore === document.getElementById('Logo')){
      getBefore = document.getElementById('Home');
    } 

    getBefore.classList.remove('navigationOn');

    var linkClicked
    if(event.currentTarget === document.getElementById('Logo')){
      document.getElementById('Home').classList.add('navigationOn');
      linkClicked = 'Home'
    } else {
      event.currentTarget.classList.add('navigationOn');
      linkClicked = event.target.dataset.id;
    }

    setBefore(linkClicked);
  }

  return (
    <div className='headerDiv'>
      <Link to="/panda-dev" id='Logo' data-id="LogoH" onClick={changePage}>
        <img src={logo} alt="Logo PandaDev" className='logoNav'/>
      </Link>

      <nav className='navHeader'>
        <Link to="/panda-dev" id='Home' data-id="Home" className='navigationLink navigationOn' onClick={changePage}> <FaHome className='iconHeader'/> Accueil</Link>
        <Link to="/quote" id='Quote' data-id="Quote" className='navigationLink' onClick={changePage}> <FaQuoteLeft className='iconHeader'/> Citations</Link>
        <Link to="/book" id='Book' data-id="Book" className='navigationLink' onClick={changePage}><FaBook className='iconHeader'/> Livres</Link>
        <Link to="/movie" id='Movie' data-id="Movie" className='navigationLink' onClick={changePage}><FaTv className='iconHeader'/> Films</Link>
        <Link to="/portfolio" id='Portfolio' data-id="Portfolio" className='navigationLink' onClick={changePage}><FaBook className='iconHeader' /> Portfolio</Link>
      </nav>
    </div>
  );
}

export default Header;
