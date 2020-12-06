import React from 'react';
import './styles/IconLink.css';


const IconLink = (props) => {

    const { type, url } = props;
    let iconLink;

    if (type == "Youtube") {
        iconLink = "https://img.icons8.com/color/48/000000/youtube-play.png"
    }

    if (type == "GitHub") {
        iconLink = "https://img.icons8.com/color/48/000000/github--v1.png"
    }

    if (!type) {
        return null;
    }

    return (
        <div className="Modal__Link-Container--item">
            <img src={iconLink} />
            <a href={url}>{type}</a>
        </div>
    );
}

export default IconLink;