import React from 'react';

function Skill(props) {

    const image = props.skillImage;
    const name = props.skillName;

    return (
        <div className="col-lg-2 col-md-3 col-sm-4">
            <div className="tile">
                <div className="icon">
                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/images/techicons/" + image} width="100px" alt={name} />
                </div>
                {name}
            </div>
        </div>
    );
}

export default Skill;