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
        addPost: (newPost) => {
            dispatch(addPostActionCreator(newPost))
        }
    }
}


const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);


export default MyPostContainer;
