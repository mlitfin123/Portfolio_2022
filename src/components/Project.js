import React, { useState } from 'react';
import TechItem from './TechItem.js';
import Zoom from 'react-reveal/Zoom';

const Project = props => {

    const [tabState, setTabState] = useState({
        tab: 'Description'
    })

    const { id, title, liveSite, gitRepo, description, projectImg, technologies, software } = props;

    const getLinks = (liveSite, gitRepo) => {
        if (liveSite !== undefined && gitRepo !== undefined) {
            return (
                <div className="links">
                    <a href={liveSite} title="Link to Live Site" target="blank" rel="noopener noreferrer">
                        <button type="button" className="action-btn btn btn-primary">Live Site</button>
                    </a>
                    <a href={gitRepo} title="Link to GitHub Repo" target="blank" rel="noopener noreferrer">
                        <button type="button" className="action-btn btn btn-primary">GitHub Repo</button>
                    </a>
                </div>
            )
        } else if (liveSite === undefined && gitRepo !== undefined) {
            return (
                <div className="links">
                    <a href={gitRepo} title="Link to GitHub Repo" target="blank" rel="noopener noreferrer">
                        <button type="button" className="action-btn-full btn btn-primary">GitHub Repo</button>
                    </a>
                </div>
            )
        } else if (liveSite !== undefined && gitRepo === undefined) {
            return (
                <div className="links">
                    <a href={liveSite} title="Link to Live Site" target="blank" rel="noopener noreferrer">
                        <button type="button" className="action-btn-full btn btn-primary">Live Site</button>
                    </a>
                </div>
            )
        } else if (liveSite === undefined && gitRepo === undefined) {
            return <></>
        }
    }

return (
    <div id={id} className="col-lg-4 col-md-6 col-sm-12 project">
        <div className="project-container">
            <Zoom>
            <h3><u>{title}</u></h3>
                    {getLinks(liveSite, gitRepo)}
                <img className="img-fluid" src={process.env.PUBLIC_URL + "../images/" + projectImg} alt={title} width="100%"/>
                <ul className="nav nav-tabs col-sm-12" role="tablist">
                    <li className="nav-item">
                        <button className={tabState.tab === 'Description' ? 'nav-link active' : 'nav-link'} onClick={() => setTabState({tab: 'Description'})} data-toggle="tab" role="tab" aria-controls="Description" aria-selected="true">Description</button>
                    </li>
                    <li className="nav-item">
                        <button className={tabState.tab === 'Technologies' ? 'nav-link active' : 'nav-link'} data-toggle="tab" onClick={() => setTabState({tab: 'Technologies'})} role="tab" aria-controls="Technologies" aria-selected="false">Technologies</button>
                    </li>
                    <li className="nav-item">
                        <button className={tabState.tab === 'Software' ? 'nav-link active' : 'nav-link'} data-toggle="tab" onClick={() => setTabState({tab: 'Software'})} role="tab" aria-controls="Software" aria-selected="false">Software</button>
                    </li>
                </ul>
                    <div className="tab-content project-description">
                    <div className={tabState.tab === 'Description' ? 'tab-pane fade show active' : 'tab-pane fade'} role="tabpanel" aria-labelledby="description-tab">
                        <h5>Description</h5>
                        <p>{description}</p> 
                    </div>
                    <div className={tabState.tab === 'Technologies' ? 'tab-pane fade show active' : 'tab-pane fade'} role="tabpanel" aria-labelledby="technologies-tab">
                        <h5>Technologies Used:</h5>
                        {
                            technologies.map((tech, index) => (
                                <TechItem
                                    key={index}
                                    techImg={tech.techImg}
                                    techName={tech.techName}
                                />
                            ))
                        }
                    </div>
                    <div className={tabState.tab === 'Software' ? 'tab-pane fade show active' : 'tab-pane fade'} role="tabpanel" aria-labelledby="software-tab">
                        <h5>Software used:</h5>
                        {
                            software.map((tech, index) => (
                                <TechItem
                                    key={index}
                                    techImg={tech.techImg}
                                    techName={tech.techName}
                                />
                            ))
                        }
                    </div>
                </div>
                </Zoom>
            </div>
        </div>
    );
}

export default Project;