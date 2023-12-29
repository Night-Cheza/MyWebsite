import React from "react";

function Projects (props) {
    const {show} = props;
    return (
        <div>
            {show && (
                <p>
                    Here will be my projects
                </p>
            )}
        </div>
    )
}

export default Projects;