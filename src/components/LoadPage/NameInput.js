import { useState } from "react";
import "./NameInput.css";

function NameInput(props) {
    const [newName, setNewName] = useState("");

    const nameHandler = (event) => {
        setNewName(event.target.value);        
    }

    const submitHandler = (event) => {
        //to prevent page reload on submit event
        event.preventDefault();

        const name = newName

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

            <div>
                <input type="text" className="nameInputField" value={newName} onChange={nameHandler}/>
                <button type="submit" className="btn btn-primary">Enter</button>
            </div>
        </form>
    )
}

export default NameInput;