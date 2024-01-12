import React from "react";
import { useState } from "react";
import "./NameInput.css";

function NameInput(props) {
    let name;
    const [newName, setNewName] = useState("");

    const nameHandler = (event) => {
        setNewName(event.target.value);        
    }

    const submitHandler = (event) => {
        //to prevent page reload on submit event
        event.preventDefault();
        newName.length === 0 ? name = 'Stranger' : name = newName
         //to pass new data to Greeting.js
        props.onSubmitNewName(name);
        
        //to clear input after form is submitted
        setNewName("");
    }

    return (
        <form onSubmit={submitHandler}>
            <p>
                What is your name?
            </p>

            <div className="inputField">
                <input type="text" value={newName} onChange={nameHandler}/>
                <button type="submit">Enter</button>
            </div>
        </form>
    )
}

export default NameInput;