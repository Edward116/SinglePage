import React from 'react';
import {addPostActionCreator, updateTextActionCreator} from "../../../Redux/Reducers/ProfileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";


let mapStateToProps = (state) => {

    return {
        profilePage: state.profilePage
    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        updatePostText: (text) => {
            dispatch(updateTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}


const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);


export default MyPostContainer;
