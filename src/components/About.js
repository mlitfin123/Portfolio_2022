import React from 'react';
import Skills from './Skills';
import LightSpeed from 'react-reveal/LightSpeed';

const About = () => {
    return (
    <main>
        <section className="content_section-about">
            <section className="column">

            <div className="row">
                <div className="col-lg-6">
                
                    <div className="column-content-bio">
                        <h1>About</h1>
                        <p>
                            I am a professional web developer and software engineer with a passion for learning and trying new things. My training includes a certificate in full-stack web development from the University of Miami in addition to a bachelors degree from a four year university. I am constantly working on new projects in my spare time which has helped me to continuously develop new skills. I am known for my attention to detail and persistence when it comes to problem solving which I have been able to develop through my years of working in quality assurance. When I’m not coding you might find me busy training for a bodybuilding or powerlifting meet or enjoying the nice Florida weather.
                        </p>
                    </div>
                </div>
                    <div className="col-lg-6">
                        <div className="column-content">
                            <LightSpeed right>
                                <img src="\images\IMG_9279.jpg" className="img-fluid" alt="Mark was Here" />
                            </LightSpeed>
                        </div>
                    </div>
            </div>
            <Skills />
            </section>
        </section>
    </main>
    );
}

export default About;