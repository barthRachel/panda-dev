import './error.css'
import logo from '../../images/logo_contours.png'

function Error() {
  document.title = "Error 404 - Page Not Found"
  return (
    <div className="divBox">
      <div className='errorBox'>
        <div className='errorTitleBox'>
          <img className='logoError' src={logo} alt='Logo'/>
          <h1>Error 404</h1>
        </div>
        <div className='errorParagraph'>
          <p>Cette page n'existe pas !</p>
        </div>
      </div>
    </div>
  );
}

export default Error;
