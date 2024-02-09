import React from "react";
import logo from '../images/majestic-bay.svg';

export const Footer:React.FC = () => {
    return (
        <div className="footer">
            <img src={logo} alt="logo" />
            <p className="footer__text">© 2018-2021 Majestic Bay</p>
        </div>
    )
}