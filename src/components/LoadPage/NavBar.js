import React from 'react';
import "./NavBar.css";
import Button from 'react-bootstrap/Button';
import { Fade } from 'react-awesome-reveal';

function NavBar () {
    return (
        <Fade delay={1e3} cascade damping={1e-1}>
        <div className="menu">            
            <Button type='submit' className='about'>About</Button>{' '}
            <Button type='submit'>Values</Button>{' '}
            <Button type='submit'>Projects</Button>{' '}
            <Button type='submit'>Contacts</Button>{' '}
        </div>
        </Fade>
    );
}

export default NavBar;