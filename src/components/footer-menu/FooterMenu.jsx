import React, {useState, useEffect} from "react";
import axios from "axios";
import "./styles.css";

const FooterMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        axios.get(
            'http://localhost:3004/menu-footer'
        ).then((resp) => {
            setMenu(resp.data);
        })
    }, []);
    return (
        <ul className={'footer-links'}>
            {(menu)?.map((value) => {
                return (
                    <li key={value.id} >
                        <a rel="nofollow" href={value.url}>{value.text}</a>
                    </li>
                )
            })}
        </ul>
    )
}

export default FooterMenu;