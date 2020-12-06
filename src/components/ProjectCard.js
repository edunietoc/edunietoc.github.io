import React, { useEffect, useState } from 'react';
import ModalBox from './ModalBox';
import './styles/ProjectCard.css'




const ProjectCard = (props) => {

    const { projectName, hashtagList, icon } = props;

    const [isModalOpen, setModal] = useState(false);


    if (isModalOpen) {
        return (
            <ModalBox
                isOpen={isModalOpen}
                setModal={setModal}
                {...props}
            />);
    } else {
        return (
            <div onClick={() => setModal(true)} className="Projects__Card">
                <figure className="Projects__Card--Icon">
                    <img src={icon} alt="Icon" />
                </figure>

                <div className="Projects__Card--Description">
                    <span>{projectName}</span>
                    <p>{hashtagList}</p>
                </div>

            </div>
        );
    }


}

export default ProjectCard;
