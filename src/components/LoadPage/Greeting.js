import "./Greeting.css";
import NameInput from "./NameInput";

function Greeting (props) {
    const submitNewNameHandler = (submittedName) => {
        const name = {
            submittedName
        };
    }
    return (
        <div>
            <div>
                <p>
                    Hi there! <br/>
                    My name is Leila or short - Leya <br/><br/>
                </p>
                <NameInput onSubmitNewName={submitNewNameHandler} />
            </div>
        </div>
    );
}

export default Greeting;