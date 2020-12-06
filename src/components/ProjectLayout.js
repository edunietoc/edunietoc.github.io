import React from 'react';
import ProjectCard from './ProjectCard';
import './styles/ProjectLayout.css';
import flutterIcon from './assets/icons/flutter.png'





class ProjectLayout extends React.Component {

    state = {
        loading: true,
        error: null,
        data: null

    }


    getData = async () => {
        try {
            let response = await fetch("../../data.json");
            const data = await response.json();
            this.setState({ loading: false, data: data });
            return data;
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }



    componentDidMount() {
        this.getData();

    }



    render() {


        if (this.state.loading) {
            return (
                <h1>Loading</h1>
            )
        }

        if (this.state.data) {
            return (
                <section id="Projects" className="Projects__Container">
                    <h2>Projects</h2>
                    <div className="Projects">
                        {this.state.data.ProjectList.map((element) => {
                            return (
                                <ProjectCard
                                    key={element.id}
                                    {...element}
                                />
                            );
                        })}
                    </div>
                </section>
            );
        }
    }
}

export default ProjectLayout;
