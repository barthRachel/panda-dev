import "./footer.css";
import logo from '../../images/logo_footer.png';
import { FaLinkedin, FaGithub, FaRegCopyright, FaDiscord } from 'react-icons/fa';

function Footer() {
  return (
    <div className="divBoxFooter primaryBackground">
      <div className="divGeneral">
        <p className="logoFooterParagraph">
          <img src={logo} alt="Logo PandaDev" className="logoFooter"/>
        </p>

        <div className="copyCredit">
          <p className="copyParagraph">
            <FaRegCopyright className="iconCopy"/> PandaDev - 2023
          </p>
          <p className="creditLogo">
            Logo by&nbsp;<a className="linkDiscord" href="https://discord.gg/StQ65wxp9J" rel="noreferrer" target="_blank"> Web | Market <FaDiscord className="iconCredit"/></a>
          </p>
        </div>

        <p className="iconFooter">
          <a href="https://www.linkedin.com/in/rachel-barthelery/" rel="noreferrer" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/barthRachel" rel="noreferrer" target="_blank"><FaGithub /></a>
        </p>
      </div>      
    </div>
  );
}

export default Footer;
