import React from "react";

function About (props) {
    const {show} = props;

    return (
        <div>
            {show && (
                <p>
                    Here will be something about me
                </p>
            )}
        </div>
    )
}

export default About;