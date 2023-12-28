import React from "react";

function About (props) {
    const {show} = props;

    return (
        <span>
            {show && (
                <p>
                    Here will be something about me
                </p>
            )}
        </span>
    )
}

export default About;