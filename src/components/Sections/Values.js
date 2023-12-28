import React from "react";

function Values (props) {
    const {show} = props;

    return (
        <div>
            {show && (
                <p>
                    Here will be my values
                </p>
            )}
        </div>
    )
}

export default Values;