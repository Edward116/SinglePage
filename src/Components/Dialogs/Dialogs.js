import React from 'react'
import s from './Dialogs.module.css'
import DialogsMessagesContainer from "./DialogsMessages/DialogsMessagesContainer";
import DialogsFriendsContainer from "./DialogsFriends/DialogsFriendsContainer";


const Dialogs = (props) => {
    return (
        <div className={s.dialogsPage}>
            <DialogsFriendsContainer />
            <DialogsMessagesContainer />
        </div>
    );

}

export default Dialogs;