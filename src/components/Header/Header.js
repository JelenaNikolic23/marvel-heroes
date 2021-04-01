import React from "react";

import logo from "../../assets/image/logo.svg";

import style from "./Header.module.css";

const Header = ({title}) => {
    return (
        <nav className={style.header}>
            <div className={style.name}>
                <img src={logo} className={style.logo} />
                {title}
            </div>
        </nav>
    )
};


export { Header };
