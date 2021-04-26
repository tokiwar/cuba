import React from "react";
import "./styles.css";
import logo from "./logo.png";
import Button from "../button/Button";
import HeaderMenu from "../header-menu/HeaderMenu";

const Header = () => {
    return (
        <div className={'header'} id={"home"}>
            <div className={'head-line'}>
                <img className={'head-logo'} src={logo}/>
                <HeaderMenu/>
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