import React, {useEffect, useState} from "react";
import "./styles.css";

const OnTopButton = () => {
    const [showButton, setShowButton] = useState('hide');
    useEffect(() => {
        window.addEventListener('scroll', function (e) {
            const scrollPos = window.scrollY;
            if (scrollPos > 1000) {
                setShowButton('show');
            } else {
                setShowButton('hide');
            }
        });
    });
    const onTop = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <button onClick={onTop} className={'on-top-button ' + showButton}>
            <img src={"/upload/arrow.svg"}/>
        </button>
    )
}

export default OnTopButton;