import React from "react";
import SectionText from "../section-text/SectionText";
import Card from "../card/Card";
import "./styles.css";
import Button from "../button/Button";
import Feedback from "../feedback/Feedback";

const Section = (props) => {
    return (
        <section className={props.className} id={props.anchor}>
            <SectionText {...props}/>
            {props.items && (
                <div className={props.className + '-items'}>
                    {(props.items)?.map((value) => {
                        value.className = props.className;
                        return <Card key={value.id} {...value}/>
                    })}
                </div>
            )}
            {props.feedback && (
                <Feedback {...props}/>
            )}
            {props.button && <Button {...props.button}/>}
        </section>
    )
}

export default Section;