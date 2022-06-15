import { useState } from "react";
import NameInput from "./NameInput";
import "./Greeting.css";

function Greeting () {
    useState();
    //not to display line with name
    const [showName, setShowName] = useState(false);

    const [enteredName, setEnteredName] = useState("");
    const submitNewNameHandler = (submittedName) => {
        setEnteredName(submittedName);  
        //to display line with entered name
        setShowName(true);          
    };

    return (
        <div>
            <div>
                <p>
                    Hi there! <br/>
                    My name is Leila or short - Leya <br/><br/>
                </p>
                {!showName && <NameInput onSubmitNewName={submitNewNameHandler} />}
                {/* to display line with entered name and hide field for entering name */}
                {showName && <p>Nice meeting you {enteredName}!</p>}
            </div>
        </div>
    );
}

export default Greeting;