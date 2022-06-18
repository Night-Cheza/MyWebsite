// import ReactTimeout from 'react-timeout'
import { useState } from "react";

// import { useEffect } from "react";

// const delay = (ms) => new Promise(
//     resolve => setTimeout(resolve, ms)
// );


const MenuButtons = () =>{
    const [timeElapsed, setTimeElapse] = useState(false);

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