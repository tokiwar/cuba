import React from "react";
import "./styles.css"

const Footer = () => {
    return (
        <div className={'footer'}>
            <ul className={'footer-links'}>
                <li><a rel="nofollow" href="https://www.fb.com/">Facebook</a></li>
                <li><a rel="nofollow" href="https://www.twitter.com/">Twitter</a></li>
                <li><a rel="nofollow" href="https://www.google.com/">Google+</a></li>
                <li><a rel="nofollow" href="https://linkedin.com/">LinkedIn</a></li>
                <li><a rel="nofollow" href="https://www.behance.net/">Behance</a></li>
                <li><a rel="nofollow" href="https://dribbble.com/">Dribbble</a></li>
                <li><a rel="nofollow" href="https://github.com/">GitHub</a></li>
            </ul>
        </div>
    )
}

export default Footer;