import "./footer.css";
import logo from '../../images/logotest.PNG';
import { FaLinkedin, FaGithub, FaRegCopyright } from 'react-icons/fa';

function Footer() {
  return (
    <div className="divBoxFooter primaryBackground">
      <div className="divGeneral">
        <p className="logoFooterParagraph">
          <img src={logo} alt="Logo PandaDev" className="logoFooter"/>
        </p>

        <p className="copyParagraph">
          <FaRegCopyright className="iconCopy"/> PandaDev - 2022
        </p>

        <p className="iconFooter">
          <a href="https://www.linkedin.com/in/rachel-barthelery/" rel="noreferrer" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/barthRachel" rel="noreferrer" target="_blank"><FaGithub /></a>
        </p>
      </div>      
    </div>
  );
}

export default Footer;
