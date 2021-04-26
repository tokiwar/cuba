import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Button from "../button/Button";
import axios from "axios";
import Popup from "../popup/Popup";

const Feedback = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const resetForm = () => {
        setName("");
        setEmail("");
        setMessage("");
    }

    const validateForm = () => {
        let validate = true;
        if (!name) {
            let errorInput = document.querySelector('label.error-name');
            errorInput.style.visibility = "unset";
            validate = false;
        }
        if (!email) {
            let errorInput = document.querySelector('label.error-email');
            errorInput.style.visibility = "unset";
            validate = false;
        }
        if (!message) {
            let errorInput = document.querySelector('label.error-message');
            errorInput.style.visibility = "unset";
            validate = false;
        }
        return validate;
    }

    const onInputChangeHandler = (event) => {
        if (event.target.name) {
            const name = event.target.name;
            const value = event.target.value;
            switch (name) {
                case 'name' : {
                    if (value) {
                        const regRes = value.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g);
                        let errorInput = document.querySelector('label.error-name');
                        if (errorInput) {
                            if (regRes) {
                                errorInput.style.visibility = "hidden";
                                setName(value);
                            } else {
                                errorInput.style.visibility = "unset";
                                setName("");
                            }
                        }
                    }
                    break;
                }
                case 'email': {
                    if (value) {
                        const regRes = value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                        let errorInput = document.querySelector('label.error-email');
                        if (errorInput) {
                            if (regRes) {
                                errorInput.style.visibility = "hidden";
                                setEmail(value);
                            } else {
                                errorInput.style.visibility = "unset";
                                setEmail("");
                            }
                        }
                    }
                    break;
                }
                case 'message' : {
                    let errorInput = document.querySelector('label.error-message');
                    if (value) {
                        errorInput.style.visibility = "hidden";
                        setMessage(value);
                    } else {
                        errorInput.style.visibility = "unset";
                        setMessage("");
                    }
                    break;
                }
                default: {
                    break;
                }
            }
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (validateForm()) {
            const form = document.querySelector('form.feedback-form');
            if (form) {
                const formData = new FormData(form);
                let object = {};
                formData.forEach((value, key) => object[key] = value);
                axios.post(
                    'http://localhost:3004/forms',
                    object
                ).then((resp) => {
                    form.reset();
                    resetForm();
                    ReactDOM.render(
                        <Popup title={'Feedback form'} msg={'Thank you for submit feedback form'}
                               className={'modal-feedback'}/>,
                        document.querySelector('.modals'));
                });
            }
        }
    }
    return (
        <div className={'feedback'}>
            <form className={"feedback-form"} method="POST" action="/">
                <div className={'feedback-form-body'}>
                    <div className={"feedback-form-header"}>
                        <div className={'form-item'}>
                            <input onChange={onInputChangeHandler} type="text" name="name" placeholder="Your Name"
                                   autoComplete={"off"} required/>
                            <label className={'error-label error-name'}>Your name may contains only letters</label>
                        </div>
                        <div className={'form-item'}>
                            <input onChange={onInputChangeHandler} type="text" name="email" placeholder="Your Email"
                                   autoComplete={"off"} required/>
                            <label className={'error-label error-email'}>Wrong email format</label>
                        </div>
                    </div>
                    <div className={"feedback-form-footer"}>
                        <div className={'form-item'}>
                            <textarea onChange={onInputChangeHandler} placeholder={"Your Message"} name="message"
                                      autoComplete={"off"} required/>
                            <label className={'error-label error-message'}>You cant send empty message</label>
                        </div>
                    </div>
                </div>
                <Button submitHandler={submitHandler} {...props.feedbackButton}/>
            </form>
        </div>
    )
}

export default Feedback;