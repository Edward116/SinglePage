import React from 'react'
import s from './Dialogs.module.css'
import DialogsFriends from "./DialogsFriends/DialogsFriends";
import DialogsMessages from "./DialogsMessages/DialogsMessages";



const Dialogs = (props) => {
    return (
        <div className={s.dialogsPage}>
            <DialogsFriends friendsData={props.friendsData}/>
            <DialogsMessages messageData={props.messageData}/>
        </div>
    );

}

export default Dialogs;