import React from "react";
import line from "./line.png";

const SectionText = ({className, title, description}) => {

    return (
        <div className={className + '-text'}>
            <span className={className + '-text-title'}>{title}</span>
            <img src={line} className={className + '-text-line'}/>
            <span className={className + '-text-description'}>{description}</span>
        </div>
    )
}

export default SectionText;