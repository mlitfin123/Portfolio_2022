import React from 'react';

function TechItem(props) {

    const name = props.techName;

    return (
    <div className="tech-icons">
        {name}
    </div>
    )
}

export default TechItem;