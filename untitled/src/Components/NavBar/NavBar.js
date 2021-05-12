import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (

        <nav className={s.nav}>
            <div className={s.item}><NavLink to='/profile'
                                             activeClassName={s.active}>Profile</NavLink></div>
            <div className={s.item}><NavLink to='/dialogs'
                                             activeClassName={s.active}>Messages</NavLink></div>
            <div className={s.item}><NavLink to='/users'
                                             activeClassName={s.active}>Users</NavLink></div>
        </nav>

    );

}


export default NavBar;