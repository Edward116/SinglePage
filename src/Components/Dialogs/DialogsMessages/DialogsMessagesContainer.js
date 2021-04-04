import React from 'react'
import s from './DialogsMessages.module.css'
import {addMessageActionCreator, updateTextMessageActionCreator
} from "../../../Redux/state";
import {connect} from "react-redux";
import DialogsMessages from "./DialogsMessages";

let mapStateToProps = (state) => {

    return {
        dialogsPage: state.dialogsPage
    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText: (text) => {
            dispatch(updateTextMessageActionCreator(text));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

const DialogsMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsMessages);

export default DialogsMessagesContainer;