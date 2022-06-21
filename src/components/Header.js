import React from 'react';
import Typewriter from 'typewriter-effect'; 
import Nav from './Nav';

const Header = () => {
    return (
        <header>   
            <Nav />
            <div>
            <h1>
                <Typewriter
                    options={{
                        autoStart:true,
                        loop:true,
                        delay:150,
                        strings:["Mark Litfin","Software Developer"]
                    }}
                    />
            </h1>
            <div>
                <label><a href="mailto:marklitfin1@gmail.com" target="_blank" rel="noreferrer"><img src="images\icons\email.png" className="icons" alt="nothing here!"></img></a></label>&nbsp; &bull; &nbsp;
                <label><a href="https://github.com/mlitfin123" target="_blank" rel="noreferrer"><img src="images\icons\github_icon.png" className="icons" alt="nothing here!"></img></a></label>&nbsp; &bull; &nbsp;
                <label><a href="https://www.linkedin.com/in/mark-litfin-b132bb67/" target="_blank" rel="noreferrer"><img src="images\icons\linkedin_social_icon.png" className="icons" alt="nothing here!"></img></a></label>&nbsp; &bull; &nbsp;
                <label><a href="https://www.instagram.com/marklifting/?hl=en" target="_blank" rel="noreferrer"><img src="\images\icons\Instagram_icon.png" className="icons" alt="nothing here!"></img></a></label>
            </div>
        </div>
    </header>
    );
}

export default Header;