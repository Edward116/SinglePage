import React from 'react'
import s from './Dialogs.module.css'
import DialogsFriends from "./DialogsFriends/DialogsFriends";
import DialogsMessages from "./DialogsMessages/DialogsMessages";


const Dialogs = () => {
    return (
        <div className={s.dialogsPage}>
            <DialogsFriends/>
            <DialogsMessages/>
        </div>
    );

}

export default Dialogs;