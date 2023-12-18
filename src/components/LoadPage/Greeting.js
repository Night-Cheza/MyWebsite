import React from "react";
import NameInput from "./NameInput";
import NavBar from "./NavBar";
import "./Greeting.css";
import { useState } from "react";
import { Zoom } from 'react-awesome-reveal';


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

    // const [showButton, setShowButton] = useState(false);
    // if(timeElapsed) {
    //     setShowButton(showButton);
    // }

    return (
        <div>
            <div>
                <p>
                    Hi there! <br/>
                    My name is Leila<br/><br/>
                </p>
                {!showName && <NameInput onSubmitNewName={submitNewNameHandler} />}
                {/* to display line with entered name and hide text field for entering name */}
                {showName && <p>Nice meeting you, {enteredName}!</p>}
                {timeElapsed ? <Zoom><div><p>What would you like to know?</p> <NavBar /></div></Zoom> : null}
            </div>            
        </div>
    );
}

export default Greeting;