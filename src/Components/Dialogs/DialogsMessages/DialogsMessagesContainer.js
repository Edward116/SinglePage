import React from 'react'
import {addMessageActionCreator, updateTextMessageActionCreator
} from "../../../Redux/Reducers/DialogsReducer";
import {connect} from "react-redux";
import DialogsMessages from "./DialogsMessages";
import {withAuthRedirect} from "../../../HOC/AuthRedirect";



let AuthRedirectComponent = withAuthRedirect(DialogsMessages)


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

const DialogsMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsMessagesContainer;