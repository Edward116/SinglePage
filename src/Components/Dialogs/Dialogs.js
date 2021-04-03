import React from 'react'
import s from './Dialogs.module.css'
import DialogsFriends from "./DialogsFriends/DialogsFriends";
import DialogsMessages from "./DialogsMessages/DialogsMessages";


const Dialogs = (props) => {
    return (
        <div className={s.dialogsPage}>
            <DialogsFriends friendsData={props.dialogsData.friendsData}/>
            <DialogsMessages messageData={props.dialogsData.messageData}
                             dialogText={props.dialogsData.dialogText}
                             dispatch={props.dispatch}/>
        </div>
    );

}

export default Dialogs;