import React from "react";
import '../styles/Header.css'

const Header :  React.FC = () => {
    return (
        <div className="container">
            <div className="left">
                <img src="/shortcut-script-app.png" alt="" />
                <h2>Bele Tech</h2>
            </div>
            <div className="right">
                <a href="">Main</a>
                <a href="">About</a>
                <a href="">Services</a>
                <a href="">Contact</a>
            </div>
        </div>
    );
};

export default Header;