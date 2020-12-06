import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Figure from './Figure';
import IconLink from './IconLink';
import './styles/ModalBox.css'
/* import cap1 from './assets/images/cap1.jpeg'; */

const ModalBox = (props) => {


    const { projectName,
        hashtagList,
        description,
        setModal,
        isOpen,
        images,
        youtube_link,
        github_link,
        id
    } = props;


    if (!isOpen) {
        return null;
    } else {

        return (
            ReactDOM.createPortal(
                <div onClick={() => setModal(false)} className="Modal">
                    <div className="Modal__container">
                        <button className="Modal__close-button">X</button>
                        <h1>{projectName}</h1>
                        <h3>{hashtagList}</h3>
                        <p>{description}</p>

                        <div className="Modal__Image-Container">
                            {

                                images ? images.map((e) => (<Figure key={e} image={e} />)) : null
                            }
                        </div>

                        <div className="Modal__Link-Container">

                            {youtube_link ? <IconLink type="Youtube" url={youtube_link} /> : null}
                            {github_link ? <IconLink type="GitHub" url={github_link} /> : null}

                        </div>
                    </div>
                </div>,
                document.getElementById('modal')
            )
        );
    }
}


export default ModalBox;