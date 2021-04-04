import React from 'react'
import {connect} from "react-redux";
import DialogsFriends from "./DialogsFriends";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const DialogsFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsFriends);

export default DialogsFriendsContainer