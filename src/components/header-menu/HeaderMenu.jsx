import React, {useEffect, useState} from "react";
import axios from "axios";
import "./styles.css";

const HeaderMenu = () => {
    const [menu, setMenu] = useState([]);
    const smoothMove = (event) => {
        event.preventDefault();
        let menuItem = event.target;
        if (event.target.nodeName !== 'A') {
            menuItem = menuItem.querySelector('a');
        }
        const menuItemHref = menuItem.getAttribute('href');
        if (menuItemHref && document.querySelector(menuItemHref)) {
            document.querySelector(menuItemHref).scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
    useEffect(() => {
        axios.get(
            'http://localhost:3004/menu-header'
        ).then((resp) => {
            setMenu(resp.data);
        })
    }, []);
    return (
        <nav className={'head-menu'}>
            <ul className={'head-menu-ul'}>
                {(menu)?.map((value) => {
                    return <li key={value.id} className={'head-menu-li'} onClick={smoothMove}><a
                        href={value.url}>{value.text}</a></li>
                })}
            </ul>
        </nav>
    )
}

export default HeaderMenu;