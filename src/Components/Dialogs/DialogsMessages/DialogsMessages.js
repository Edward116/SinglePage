import React from 'react'
import s from './DialogsMessages.module.css'

const DialogsMessages = (props) => {


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
                <form>
                    <input type="text"/>
                    <button>Add Message</button>
                </form>
            </div>
        </div>
    );

}

export default DialogsMessages