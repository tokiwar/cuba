import React, {useEffect, useState} from "react";
import axios from "axios";
import "./styles.css";

const HeaderMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        axios.get(
            'http://localhost:3004/menu'
        ).then((resp) => {
            setMenu(resp.data);
        })
    }, []);
    return (
        <nav className={'head-menu'}>
            <ul className={'head-menu-ul'}>
                {(menu)?.map((value) => {
                    return <li key={value.id} className={'head-menu-li'}><a href={value.url}>{value.text}</a></li>
                })}
            </ul>
        </nav>
    )
}

export default HeaderMenu;