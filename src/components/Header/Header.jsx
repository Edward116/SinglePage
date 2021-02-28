import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return(
        <header className={s.header}>
            <img src='https://logofirmy.net/wp-content/uploads/2020/05/WhatsApp-Logo.png' alt="" />
        </header>
    );
}

export default Header