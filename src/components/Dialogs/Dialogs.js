import React from 'react'
import s from './Dialog.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {



    let dialogsElement =
        props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);




    let messageElement =
        props.messages.map(m => <Message message={m.message} id={m.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    );
}

export default Dialogs