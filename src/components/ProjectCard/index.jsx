import './projectcard.css';
import {FaExternalLinkAlt} from 'react-icons/fa';

function ProjectCard({cover, name, date, projectLinkWeb, repositoryLink}) {
    return (
        <div className='projectCard whiteBackground'>
            <div className='projectCardBox'>
                <div className='projectCover'>
                    <img className='projectCoverImg' src={cover} alt="Project Cover"/>
                </div>
                <div className='projectDescription'>
                    <p className='projectName'>Projet « {name} »</p>
                    <p><span className='bold'>Date de fin</span> : {date}</p>
                    <p><a className='projectLink' href={projectLinkWeb} rel="noreferrer" target="_blank">Voir le projet grandeur nature ! <FaExternalLinkAlt /></a></p>
                    <p className='projectLinkParagraph'><span className='bold'>Repo GitHub</span> : <a className='projectLink' href={repositoryLink} rel="noreferrer" target="_blank">Clique ! <FaExternalLinkAlt className='linkIcon'/></a></p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;