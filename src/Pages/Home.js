import React from 'react';
import Navbar from '../components/Navbar';
import Description from '../components/Description';
import ProjectLayout from '../components/ProjectLayout';
import Contact from '../components/Contact';
import '../index.css';


const Home = () => {

    return (
        <>

            <Navbar />
            <Description />
            <ProjectLayout>

            </ProjectLayout>
            <Contact></Contact>
        </>
    )
}

export default Home;
