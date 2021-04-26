import React from "react";

const Social = ({link, icon, className}) => {
    return (
        <div className={className}>
            <a href={link}>
                <img src={icon} alt={""}/>
            </a>
        </div>
    )
}

export default Social;