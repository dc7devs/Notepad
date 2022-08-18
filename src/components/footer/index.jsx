import React from "react"

import { FaGithub, FaTwitter, FaLinkedin} from "react-icons/fa"
import "./style.scss";

const Footer = () => {
    return (
        <footer className="footerContainer">
            <a 
                href="https://www.linkedin.com/in/diego-c-silva-487b171a5"
                target="_blank"
                rel="noreferrer"
                className="icon"
            >
                <FaLinkedin />
            </a>
            <a
                href="https://github.com/Diego-DevsS"
                target="_blank"
                rel="noreferrer"
                className="icon"
            >
                    <FaGithub />
            </a>
            <a 
                href="https://twitter.com/DiegoSi06829718"
                target="_blank"
                rel="noreferrer"
                className="icon"
            >
                <FaTwitter />
            </a>
        </footer>
    )
}

export default Footer;

