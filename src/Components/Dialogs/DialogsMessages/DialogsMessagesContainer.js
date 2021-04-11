import React from 'react'
import {addMessageActionCreator, updateTextMessageActionCreator
} from "../../../Redux/Reducers/DialogsReducer";
import {connect} from "react-redux";
import DialogsMessages from "./DialogsMessages";
import {withAuthRedirect} from "../../../HOC/AuthRedirect";
import {compose} from "redux";

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)
(DialogsMessages)

