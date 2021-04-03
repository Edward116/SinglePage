import React from 'react'
import s from './DialogsMessages.module.css'
import {addMessageActionCreator, updateTextMessageActionCreator} from "../../../Redux/state";

const DialogsMessages = (props) => {

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())

    }

    const changeInput = (e) => {
        let text = e.target.value;
        props.dispatch(updateTextMessageActionCreator(text))
    }


    return (
        <div className={s.dialogs}>
            <div>
                {props.messageData.map(data => {
                    return (
                        <div className={s.message}>
                            {data.message}
                        </div>
                    )
                })}
            </div>

            <div>

                    <input
                        type="text"
                           value={props.dialogText}
                           onChange={changeInput}/>
                    <button onClick={addMessage}>Add Message</button>

            </div>
        </div>
    );

}

export default DialogsMessages