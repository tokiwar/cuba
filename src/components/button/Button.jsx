import React from "react";
import "./styles.css";

const Button = ({text, link, className, submitHandler}) => {
    return (
        <button onClick={submitHandler ?? undefined} type={"submit"} className={className}>{text}</button>
    )
}

export default Button;