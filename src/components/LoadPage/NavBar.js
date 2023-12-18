import React from 'react';
import "./NavBar.css";
import Button from 'react-bootstrap/Button';

function NavBar () {
    return (
        <div className="menu">
           <Button type='submit' >About</Button>{' '}
           <Button type='submit'>Values</Button>{' '}
           <Button type='submit'>Projects</Button>{' '}
           <Button type='submit'>Contacts</Button>{' '}
        </div>
    );
}

export default NavBar;