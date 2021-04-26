import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const Popup = ({msg, title, className}) => {
    useEffect(() => {
        openModal();
        document.addEventListener("click", function (event) {
            if (
                event.target.matches(".button-close-modal") ||
                !event.target.closest(".modal")
            ) {
                closeModal(event)
            }
        });
    });
    const openModal = () => {
        document.body.style.overflow = "hidden";
        let modals = document.querySelector('.modals');
        if (modals) {
            modals.classList.add('modals-background');
        }
    }
    const closeModal = (event) => {
        event.preventDefault();
        const node = document.querySelector('.modals');
        if (node) {
            ReactDOM.unmountComponentAtNode(node);
            document.body.style.overflow = "unset";
            let modals = document.querySelector('.modals');
            if (modals) {
                modals.classList.remove('modals-background');
            }
        }

    }
    return (
        <div className={'modal ' + className}>
            <div className={'modal-body'}>
                <div className={'modal-title'}>{title}</div>
                <div className={'modal-text'}>{msg}</div>
            </div>
            <button className={'modal-close'} onClick={closeModal}>
                <img src={"/upload/close.svg"} alt={""}/>
            </button>
        </div>
    )
}

export default Popup;
