import React from "react";
import "./styles.css";
import Social from "../social/Social";

const Card = ({text, title, img, className, subtitle, socials, pretitle}) => {
    return (
        <div className={className + '-card'}>
            <div className={className + '-card-head'}>
                <img src={img} className={className + '-card-img'} alt={title}/>
                <span className={className + '-card-pretitle'}>
                {pretitle}
            </span>
            </div>
            <span className={className + '-card-title'}>
                {title}
            </span>
            <span className={className + '-card-subtitle'}>
                {subtitle}
            </span>
            <span className={className + '-card-text'}>
                {text}
            </span>
            <div className={className + '-card-socials'}>
                {(socials)?.map((value) => {
                    value.className = className;
                    return <Social key={value.id} {...value}/>
                })}
            </div>
        </div>
    )
}

export default Card;