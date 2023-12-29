import React, { useState } from 'react';
import "./NavBar.css";
import Button from 'react-bootstrap/Button';
import About from '../Sections/About';
import Values from '../Sections/Values';
import Projects from '../Sections/Projects';
import Contacts from '../Sections/Contacts';

//think of a way to use one component for all sections depending on what button clicked

function NavBar () {
    useState();
    const [showAbout, setShowAbout] = useState(false);
    const [showValues, setShowValues] = useState (false);
    const [showProjects, setShowProjects] = useState (false);
    const [showContacts, setShowContacts] = useState (false);

    const goToAbout = () => {
        setShowAbout(true);
        setShowValues(false);
        setShowProjects(false);
        setShowContacts(false);
    };

    const goToValues = () => {
        setShowValues(true);
        setShowAbout(false);
        setShowProjects(false);
        setShowContacts(false);
    };

    const goToProjects = () => {
        setShowProjects(true);
        setShowAbout(false);
        setShowValues(false);
        setShowContacts(false);
    };

    const goToContacts = () => {
        setShowContacts(true);
        setShowAbout(false);
        setShowValues(false);
        setShowProjects(false);
    };

    return (
        <div>
            <div className="menu">
            <Button onClick={goToAbout}>About</Button>
            <Button onClick={goToValues}>Values</Button>
            <Button onClick={goToProjects}>Projects</Button>
            <Button onClick={goToContacts}>Contacts</Button>
            </div>
            <div>
                <About show={showAbout} />
                <Values show={showValues} />
                <Projects show={showProjects} />
                <Contacts show={showContacts} />
            </div>
        </div>

    );
}

export default NavBar;