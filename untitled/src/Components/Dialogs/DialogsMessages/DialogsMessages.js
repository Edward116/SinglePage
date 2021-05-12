import React from 'react';
import s from './DialogsMessages.module.css';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../AnotherThings/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../../AnotherThings/utils/validators/validator";


const maxLength = maxLengthCreator(50)

const DialogsMessages = (props) => {

    const addMessage = (value) => {
        props.addMessage(value.dialogsMessage);

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
                <MessageFormRedux onSubmit={addMessage}/>
            </div>
        </div>
    );

}

const MessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your message'}
                       component={Textarea}
                       validate={[required, maxLength]}
                       name={'dialogsMessage'}/>
            </div>
           <div>
               <button>Add Message</button>
           </div>

        </form>
    );
}

const MessageFormRedux = reduxForm({
    form: 'dialogMessageForm'
})(MessageForm);

export default DialogsMessages