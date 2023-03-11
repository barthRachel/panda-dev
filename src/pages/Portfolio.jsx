import '../css/Portfolio.css'
import ProjectCard from '../components/ProjectCard';
import projectList from '../projects.json';
import BackToTop from 'react-back-to-top-button';

function Portfolio(){

    document.title = "Pandadev | Portfolio"
       
    return (
        <div className='divBox'>
            <div className='entireBox'>
                <div className='divPresentation'>
                    <h1>Bienvenue sur mon portfolio !</h1>
                    <p>Si ça vous intéresse, vous pouvez cliquer sur les projets réalisés pour voir les résultats grandeur nature.<br/>
                    Vous pouvez aussi allez voir directement <a className='linkGit' href="https://github.com/barthRachel" rel="noreferrer" target="_blank">mon profil github</a> pour les détails.</p>
                </div>
                <div className='getAllProjects'>
                    {
                        projectList.map((infos, index) => (
                            <ProjectCard
                                key={`${infos.name}-${index}`}
                                cover={infos.cover}
                                name={infos.name}
                                date={infos.date}
                                projectLinkWeb={infos.url}
                                repositoryLink={infos.repository}
                            />
                        )) 
                    }
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
    )
}

export default Portfolio;