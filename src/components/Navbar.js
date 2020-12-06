import React from 'react';
import './styles/Navbar.css';


const Navbar = () => {

    return (
        <nav className="Navbar">
            <h1 className="Navbar__name">Eduardo Nieto</h1>
            <ul className="Navbar__container">
                <a href='#Description' className="Navbar__container--item">About me</a>
                <a href='#Projects' className="Navbar__container--item">Projects</a>
                <a href='#Contact' className="Navbar__container--item">Contact</a>
            </ul>
        </nav>
    );

}

export default Navbar;
