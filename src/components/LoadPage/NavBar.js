import React, { useState } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom'
import "./NavBar.css";
import Button from 'react-bootstrap/Button';
import About from '../Sections/About';
import Values from '../Sections/Values';
import Projects from '../Sections/Projects';
import Contacts from '../Sections/Contacts';
import Greeting from './Greeting';

function NavBar () {
    const navigate = useNavigate();
    const [showAbout, setShowAbout] = useState(false);
    const [showValues, setShowValues] = useState (false);
    const [showProjects, setShowProjects] = useState (false);
    const [showContacts, setShowContacts] = useState (false);
    const [showHome, setShowHome] = useState (false);

    const navigateAbout = () => {
        navigate('/about');
    };
    const navigateValues = () => {
        navigate('/values');
    };
    const navigateProjects = () => {
        navigate('/projects');
    };
    const navigateContacts = () => {
        navigate('/contacts');
    };
    const navigateHome = () => {
        navigate('/');
    };

    return (
        <div className="menu">
           <Button type='button' onClick={navigateAbout}>About</Button>
           <Button type='button' onClick={navigateValues}>Values</Button>
           <Button type='button' onClick={navigateProjects}>Projects</Button>
           <Button type='button' onClick={navigateContacts}>Contacts</Button>
           <Button type='button' onClick={navigateHome}>Home</Button>

           <Routes>
            <Route path='/about' element={<About />}></Route>
            <Route path='/values' element={<Values />}></Route>
            <Route path='/projects' element={<Projects />}></Route>
            <Route path='/contacts' element={<Contacts />}></Route>
            <Route path='/' element={<Greeting />}></Route>
           </Routes>
        </div>
    );
}

export default NavBar;