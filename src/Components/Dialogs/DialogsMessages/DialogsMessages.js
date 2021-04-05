import React from 'react'
import s from './DialogsMessages.module.css'

const DialogsMessages = (props) => {

    const addMessage = () => {
        props.addMessage();

    }

    const changeInput = (e) => {
        let text = e.target.value;
        props.updateMessageText(text);
    }


    return (
        <div className={s.dialogs}>
            <div>
                {props.dialogsPage.messageData.map(data => {
                    return (
                        <div className={s.message}>
                            {data.message}
                        </div>
                    );
                })}
            </div>

            <div>

                    <input
                        type="text"
                           value={props.dialogsPage.dialogText}
                           onChange={changeInput}/>
                    <button onClick={addMessage}>Add Message</button>

            </div>
        </div>
    );

}

export default DialogsMessages