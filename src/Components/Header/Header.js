import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/505px-Apple_logo_grey.svg.png"
                alt="logo"/>
            <div className={s.login}>
                {props.isAuth ? props.login :
                <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>

    );

}


export default Header;
