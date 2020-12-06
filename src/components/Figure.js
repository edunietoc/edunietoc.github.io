import React from 'react';
import './styles/Figure.css';

const Figure = (props) => {

    const { image } = props;

    return (
        <figure className="Modal__Image-Container--item">
            <img src={image} alt="" />
        </figure>
    );
}

export default Figure;