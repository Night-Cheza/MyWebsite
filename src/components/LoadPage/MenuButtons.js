import { useState } from "react";

const MenuButtons = () =>{
    const [timeElapsed, setTimeElapse] = useState(false);

    //to render a question with 1200ms delay
    setTimeout(() => {
        setTimeElapse(true);
    }, 1200);

    return (
        <div>
            <p>
                {timeElapsed ? "What would you like to know?" : null}
            </p>
        </div>
    )

} 

export default MenuButtons;