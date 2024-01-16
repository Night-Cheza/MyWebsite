import React from "react";

// here ...props is collecting all other/extra props like className or id that can be set in component
function Section({title, children, ...props}) {
    return(
        //destructuring other/extra collected ...props to be passed to this custom component function
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}

export default Section;