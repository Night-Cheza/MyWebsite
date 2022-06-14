import { useState } from "react";
import NameInput from "./NameInput";
import "./Greeting.css";

function Greeting () {
    //to render entered name
    useState();
    const [enteredName, setEnteredName] = useState("");
    const submitNewNameHandler = (submittedName) => {
        setEnteredName(submittedName);    
    };
    
    return (
        <div>
            <div>
                <p>
                    Hi there! <br/>
                    My name is Leila or short - Leya <br/><br/>
                </p>
                <NameInput onSubmitNewName={submitNewNameHandler} />

                <p>Nice meeting you {enteredName}</p>
            </div>
        </div>
    );
}

export default Greeting;