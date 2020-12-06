import React from 'react';
import ContactForm from './ContactForm';
import './styles/Contact.css'

const Contact = () => {


    return (
        <section id="Contact" className="Contact">
            <h2>Contact Me</h2>
            <div className="Contact__Container">
                <div className="Contact__Card">

                    <ContactForm />

                </div>
                <div className="Contact__Social">

                    <div className="Contact__Link">
                        <img src="https://img.icons8.com/color/96/000000/linkedin.png" />
                        <a href="https://www.linkedin.com/in/edunietoc/">LinkedIn</a>
                    </div>

                    <div className="Contact__Link">
                        <img src="https://img.icons8.com/color/96/000000/github--v1.png" />
                        <a href="https://github.com/edunietoc">GitHub</a>
                    </div>

                    <div className="Contact__Link">
                        <img src="https://img.icons8.com/color/96/000000/twitter.png" />
                        <a href="https://twitter.com/EduNietoC">Twitter</a>
                    </div>

                    <div className="Contact__Link">
                        <img src="https://img.icons8.com/color/96/000000/youtube-play.png" />
                        <a href="https://www.youtube.com/channel/UCTYR5vJUz4g1Y6jsK-YLTig">Youtube</a>
                    </div>

                </div>





            </div>


        </section>
    );


}


export default Contact;