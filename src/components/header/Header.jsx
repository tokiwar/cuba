import React from "react";
import "./styles.css";
import logo from "./logo.png";
import Button from "../button/Button";

const Header = () => {
    return (
        <div className={'header'}>
            <div className={'head-line'}>
                <img className={'head-logo'} src={logo}/>
                <nav className={'head-menu'}>
                    <ul className={'head-menu-ul'}>
                        <li className={'head-menu-li'}><a href={'#'}>HOME</a></li>
                        <li className={'head-menu-li'}><a href={'#'}>ABOUT</a></li>
                        <li className={'head-menu-li'}><a href={'#'}>WORK</a></li>
                        <li className={'head-menu-li'}><a href={'#'}>BLOG</a></li>
                        <li className={'head-menu-li'}><a href={'#'}>CONTACT</a></li>
                    </ul>
                </nav>
            </div>
            <div className={'head-body'}>
                <div className={'head-body-text'}>
                    Hi there! We are the new kids on the block <br/> and we build awesome websites and mobile apps.
                </div>
                <Button className='main-button head-body-button' text="WORK WITH US!"/>
            </div>
        </div>
    )
}

export default Header;