import React from 'react'
import {addMessageActionCreator} from "../../../Redux/Reducers/DialogsReducer";
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
        addMessage: (message) => {
            dispatch(addMessageActionCreator(message))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),

)
(DialogsMessages)

