import React from "react";
import NameInput from "./NameInput";
import NavBar from "./NavBar";
import "./Greeting.css";
import { useState } from "react";
import { Fade, Zoom } from 'react-awesome-reveal';

function Greeting () {
    useState();
    //control display line with name
    const [showName, setShowName] = useState(false);
    const [enteredName, setEnteredName] = useState("");

    const submitNewNameHandler = (submittedName) => {
        setEnteredName(submittedName); 
        //to display line with entered name
        setShowName(true); 
    }   
    
    const [timeElapsed, setTimeElapse] = useState(false);
   if(showName) { 
    //to render a question with 1200ms delay
    setTimeout(() => {
        setTimeElapse(true);
    }, 1200)};

    return (
        <div>
            <div>
                {!showName && <div className="greetings">Hi there! <br/>My name is Leila<br/><NameInput onSubmitNewName={submitNewNameHandler} /></div>}
                {/* to display line with entered name and hide text field for entering name */}
                {showName && <div className="nameDisaplay">Nice meeting you, {enteredName}!</div>}
                {timeElapsed ? <div><Zoom><p>What would you like to know?</p></Zoom><Fade delay={1e3} cascade damping={1e-1}><NavBar /></Fade></div> : null}
            </div>
       </div>
    );
}

export default Greeting;
