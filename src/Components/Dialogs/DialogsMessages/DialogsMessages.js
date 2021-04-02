import React from 'react'
import s from './DialogsMessages.module.css'


const DialogsMessages = () => {
    return (
            <div className={s.dialogs}>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    How are you?
                </div>
                <div className={s.message}>
                    What`s wrong?
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