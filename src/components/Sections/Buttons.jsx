import React from "react";

function Buttons({children, btns}) {
    return (
        <>
            <menu>
                {btns}
            </menu>
            {children}
        </>
    )
}

export default Buttons;