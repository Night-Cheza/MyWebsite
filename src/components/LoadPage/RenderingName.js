import Greeting from "./Greeting";

function RenderingName(props) {
    return (
        <Greeting>
            <div>
                <p>
                    Nice meeting you {props.name} <br/>
                    What would you like to know?
                </p>
            </div>
        </Greeting>
    );
}

export default RenderingName;