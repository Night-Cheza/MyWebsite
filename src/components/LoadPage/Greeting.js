import "./Greeting.css";

function Greeting () {
    return (
        <div>
            <div>
                <p>
                    Hi there! <br/>
                    My name is Leila or short - Leya <br/><br/>
                    What is your name?
                </p>

                <div>
                    <input type="text"/>
                    <button type="submit">Enter</button>
                </div>
            </div>
        </div>
    );
}

export default Greeting;