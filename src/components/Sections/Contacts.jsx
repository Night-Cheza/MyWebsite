import React from "react";

function Contacts (props) {
    const {show} = props;

    return (
        <div>
            {show && (
                <p>
                    Here will be my contacts
                </p>
            )}
        </div>
    )
}

export default Contacts;