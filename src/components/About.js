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
                            I am a professional web developer who has recently graduated with a certificate in full-stack web development from the University of Miami. This certificate program has provided me with newly developed skills in web development. My specialties include HTML, CSS, Javascript, Jquery, React, etc. I am known for my attention to detail and problem solving abilities which I have been able to develop through my years of working in quality assurance. I am passionate about coming up with new ideas and developing meaningful applications that can provide use or entertainment for their users.
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