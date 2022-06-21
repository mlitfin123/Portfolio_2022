import React, { useState, useEffect } from 'react';
import skillsData from '../data/skills.json';
import Skill from './Skill';

function Skills() {

    const [skillState, setSkillState] = useState([]);

    useEffect(() => {
        setSkillState(skillsData[0].programming);
    }, []);

return (
    <main>
        <section className="content_section-skills">
                <div className="column">
                    <div className="column-content">
                        <h1>Skills</h1><br></br>
                        <div className="row">
                            {
                                skillState.map((skill, index) => (
                                <Skill 
                                    key={index}
                                    skillImage={skill.skillImage}
                                    skillName={skill.skillName}
                                />
                                ))
                            }
                        </div>
                    </div>
                </div>
        </section>
    </main>
    );
}

export default Skills;